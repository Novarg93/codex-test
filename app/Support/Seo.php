<?php

namespace App\Support;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Seo
{
    protected static function toUrl(?string $path): ?string
    {
        if (!$path) return null;

        if (str_starts_with($path, 'http') || str_starts_with($path, '/')) {
            return $path;
        }

        return Storage::url($path);
    }

    public static function from(Model $m, array $fallback = []): array
    {
        $title = $m->seo_title ?? $fallback['title'] ?? $m->name ?? $m->title ?? config('app.name');
        $desc  = $m->seo_description ?? $fallback['description'] ?? null;

        $canonical = $m->canonical_url ?? $fallback['canonical'] ?? null;

        $ogTitle = $m->seo_og_title ?? $fallback['og_title'] ?? $title;
        $ogDesc  = $m->seo_og_description ?? $fallback['og_description'] ?? $desc;

        $ogImageRaw = $m->seo_og_image ?? $fallback['og_image'] ?? null;
        $ogImage = self::toUrl($ogImageRaw);

        $robots = ($m->seo_noindex ?? false)
            ? ($fallback['robots_noindex'] ?? 'noindex,follow')
            : ($fallback['robots_index'] ?? 'index,follow');

        return [
            'title' => $title,
            'description' => $desc,
            'canonical' => $canonical,
            'robots' => $robots,
            'og' => [
                'title' => $ogTitle,
                'description' => $ogDesc,
                'image' => $ogImage,
                'url' => $canonical,
                'type' => $fallback['og_type'] ?? 'website',
                'site_name' => config('app.name'),
            ],
            'seo_text' => $m->seo_text ?? $fallback['seo_text'] ?? null,
        ];
    }

    public static function fromFallback(array $fallback = []): array
    {
        $title = $fallback['title'] ?? config('app.name');

        $ogImageRaw = $fallback['og_image'] ?? null;
        $ogImage = self::toUrl($ogImageRaw);
        $canonical = $fallback['canonical'] ?? null;
        return [
            'title' => $title,
            'description' => $fallback['description'] ?? null,
            'og' => [
                'title' => $fallback['og_title'] ?? $title,
                'description' => $fallback['og_description'] ?? ($fallback['description'] ?? null),
                'image' => $ogImage,
                'url' => $canonical,
                'type' => $fallback['og_type'] ?? 'website',
                'site_name' => config('app.name'),
            ],
            'canonical' => $fallback['canonical'] ?? null,
            'robots' => $fallback['robots'] ?? 'index,follow',
            'seo_text' => $fallback['seo_text'] ?? null,
        ];
    }
}
