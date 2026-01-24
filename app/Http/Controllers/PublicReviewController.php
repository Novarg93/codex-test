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
        ]);
    }
}
