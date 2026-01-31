<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Game;
use App\Models\Product;

class PublicReviewController extends Controller
{
    public function index(Request $request)
    {
        $q = Review::query()
            ->where('status', Review::STATUS_APPROVED)
            ->whereNotNull('approved_at');

        if ($request->filled('rating')) {
            $q->where('rating', (int) $request->integer('rating'));
        }

        // ✅ GAME: либо game_id, либо game (name contains) + матчим по games таблице
        if ($request->filled('game')) {
            $term = trim((string) $request->string('game'));
            if ($term !== '') {
                $needle = mb_strtolower($term);
                $gameIds = \App\Models\Game::query()
                    ->whereRaw('LOWER(name) LIKE ?', ['%' . $needle . '%'])
                    ->limit(50)
                    ->pluck('id')
                    ->all();

                $q->whereIn('game_id', $gameIds ?: [-1]);
            }
        }

        // ✅ PRODUCT: либо product_id, либо product (name contains) + матчим по products таблице
        if ($request->filled('product')) {
            $term = trim((string) $request->string('product'));
            if ($term !== '') {
                $needle = mb_strtolower($term);
                $productIds = \App\Models\Product::query()
                    ->whereRaw('LOWER(name) LIKE ?', ['%' . $needle . '%'])
                    ->limit(50)
                    ->pluck('id')
                    ->all();

                $q->whereIn('product_id', $productIds ?: [-1]);
            }
        }

        $q->orderByDesc('approved_at');

        $reviews = $q->paginate(20)->withQueryString();

        // ✅ отдадим список игр для выбора (первый экран без запросов)
        $games = Game::query()
            ->orderBy('name')
            ->get(['id', 'name', 'image_url']);

        $baseAll = Review::query()
            ->where('status', Review::STATUS_APPROVED)
            ->whereNotNull('approved_at');

        $totalAll = (clone $baseAll)->count();
        $avgAll = (float) ((clone $baseAll)->avg('rating') ?? 0);

        // distribution 1..5
        $distRaw = (clone $baseAll)
            ->selectRaw('rating, COUNT(*) as cnt')
            ->groupBy('rating')
            ->pluck('cnt', 'rating')
            ->toArray();

        $dist = [
            5 => (int)($distRaw[5] ?? 0),
            4 => (int)($distRaw[4] ?? 0),
            3 => (int)($distRaw[3] ?? 0),
            2 => (int)($distRaw[2] ?? 0),
            1 => (int)($distRaw[1] ?? 0),
        ];

        // Most reviewed product (по отзывам)
        $mostReviewed = (clone $baseAll)
            ->whereNotNull('product_id')
            ->selectRaw('product_id, product_name, product_image_url, COUNT(*) as cnt')
            ->groupBy('product_id', 'product_name', 'product_image_url')
            ->orderByDesc('cnt')
            ->first();

        // Highest score product (avg rating, с порогом по кол-ву)
        $minReviews = 5;
        $highestRated = (clone $baseAll)
            ->whereNotNull('product_id')
            ->selectRaw('product_id, product_name, product_image_url, AVG(rating) as avg_rating, COUNT(*) as cnt')
            ->groupBy('product_id', 'product_name', 'product_image_url')
            ->having('cnt', '>=', $minReviews)
            ->orderByDesc('avg_rating')
            ->orderByDesc('cnt')
            ->first();

        return Inertia::render('Reviews/Index', [
            'filters' => [
                'rating' => $request->filled('rating')
                    ? $request->integer('rating')
                    : null,
                'game' => $request->string('game')->toString() ?: null,
                'product' => $request->string('product')->toString() ?: null,

            ],
            'games' => $games,
            'reviews' => $reviews->through(fn($r) => [
                'id' => $r->id,
                'rating' => (int) $r->rating,
                'body' => $r->body,

                'is_anonymous' => (bool) $r->is_anonymous,

                'display_name' => $r->is_anonymous ? 'Anonymous' : $r->display_name,
                'avatar_url'   => $r->is_anonymous ? null : $r->avatar_url,

                'game' => [
                    'id' => $r->game_id,
                    'name' => $r->game_name,
                    'image_url' => $r->game_image_url,
                ],
                'product' => [
                    'id' => $r->product_id,
                    'name' => $r->product_name,
                    'image_url' => $r->product_image_url,
                ],
                'published_at' => optional($r->approved_at)->toDateTimeString(),
            ]),
            'stats' => [
                'total' => $totalAll,
                'avg' => round($avgAll, 1),
                'dist' => $dist,
            ],
            'highlights' => [
                'most_reviewed' => $mostReviewed ? [
                    'product_id' => (int)$mostReviewed->product_id,
                    'name' => $mostReviewed->product_name,
                    'image_url' => $mostReviewed->product_image_url,
                    'count' => (int)$mostReviewed->cnt,
                ] : null,
                'highest_rated' => $highestRated ? [
                    'product_id' => (int)$highestRated->product_id,
                    'name' => $highestRated->product_name,
                    'image_url' => $highestRated->product_image_url,
                    'avg' => round((float)$highestRated->avg_rating, 1),
                    'count' => (int)$highestRated->cnt,
                    'min_reviews' => $minReviews,
                ] : null,
            ],
            'seo' => seoPage('reviews', [
                'canonical' => url(route('reviews.public', [], false)),
                'title' => 'Reviews',
                'description' => 'Customer reviews and ratings for our services.',
            ]),
        ]);
    }
}
