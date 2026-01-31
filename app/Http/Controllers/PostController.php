<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Support\Seo;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $query = Post::query()
            ->where('status', 'published')
            ->orderByDesc('published_at')
            ->orderByDesc('id');

        $posts = $query->paginate(10)->withQueryString();

        $canonical = url(route('posts.index', [], false));

        return Inertia::render('Posts/Index', [
            'seo' => Seo::fromFallback([
                'title' => 'Blog',
                'description' => 'Latest posts and updates.',
                'canonical' => $canonical,
                'og_title' => 'Blog',
                'og_description' => 'Latest posts and updates.',
                'og_image' => null,
                'og_type' => 'website',
            ]),
            'posts' => $posts->through(function (Post $post) {
                return [
                    'id'           => $post->id,
                    'title'        => $post->title,
                    'slug'         => $post->slug,
                    'image_url'    => $this->publicImageUrl($post->cover_image),
                    'published_at' => optional($post->published_at)->toDateTimeString(),
                    'excerpt'      => Str::limit(strip_tags((string) $post->content), 180),
                ];
            }),
        ]);
    }

    public function show(Post $post)
    {
        abort_unless($post->status === 'published', 404);

        $canonical = url(route('posts.show', [$post->slug], false));

        $seo = Seo::from($post, [
            'canonical' => $canonical,
            'title' => $post->title . ' — Blog',
            'description' => $post->seo_description
                ?? Str::limit(strip_tags((string) $post->content), 160),
            'og_title' => $post->title,
            'og_description' => $post->seo_og_description
                ?? $post->seo_description
                ?? Str::limit(strip_tags((string) $post->content), 160),
            'og_image' => $this->publicImageUrl($post->seo_og_image)
                ?? $this->publicImageUrl($post->cover_image),
            'og_type' => 'article',
        ]);

        return Inertia::render('Posts/Show', [
            'seo' => $seo,
            'post' => [
                'id'           => $post->id,
                'title'        => $post->title,
                'slug'         => $post->slug,
                'image_url'    => $this->publicImageUrl($post->cover_image),
                'content'      => (string) $post->content,
                'published_at' => optional($post->published_at)->toDateTimeString(),
            ],
        ]);
    }

    private function publicImageUrl(?string $path): ?string
    {
        if (empty($path)) {
            return null;
        }

        // Уже абсолютный URL или отданный из /storage — возвращаем как есть
        if (Str::startsWith($path, ['http://', 'https://', '/storage/'])) {
            return $path;
        }

        // Нормализуем путь (без ведущего слэша)
        $normalized = ltrim($path, '/');

        /** @var \Illuminate\Filesystem\FilesystemAdapter $disk */
        $disk = Storage::disk('public');

        // Если файл есть на диске public — вернём корректный URL от диска
        if ($disk->exists($normalized)) {
            return $disk->url($normalized);
        }

        // Фолбэк через asset() — полезен для IDE и нестандартных драйверов
        return asset('storage/' . $normalized);
    }
}
