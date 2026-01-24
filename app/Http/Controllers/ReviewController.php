<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function create(Request $request, Order $order, OrderItem $item)
    {
        $user = $request->user();

        abort_unless($order->user_id === $user->id, 403);
        abort_unless($item->order_id === $order->id, 404);

        // только после completed заказа
        abort_unless($order->status === \App\Models\Order::STATUS_COMPLETED, 422, 'Reviews are available after delivery.');

        // 1 review per item
        if ($item->review) {
            return redirect()
                ->route('orders.show', $order)
                ->with('success', 'Review already submitted.');
        }

        $product = $item->product()->with(['category.game', 'categories.game'])->first();

        // определяем game через category_id, иначе primary category
        $category = null;
        if ($product) {
            $category = $product->category_id
                ? $product->category()->with('game')->first()
                : $product->categories()->with('game')->wherePivot('is_primary', true)->first();
            if (!$category) {
                $category = $product->categories()->with('game')->first();
            }
        }

        $game = $category?->game;

        return Inertia::render('Reviews/Create', [
            'orderId' => $order->id,
            'item' => [
                'id' => $item->id,
                'product_id' => $item->product_id,
                'product_name' => $item->product_name,
                'product_image_url' => $product?->image_url,
                'qty' => (int) $item->qty,
            ],
            'game' => $game ? [
                'id' => $game->id,
                'name' => $game->name,
                'image_url' => $game->image_url,
            ] : null,
        ]);
    }

    public function store(Request $request, Order $order, OrderItem $item)
    {
        $user = $request->user();

        abort_unless($order->user_id === $user->id, 403);
        abort_unless($item->order_id === $order->id, 404);

        abort_unless($order->status === \App\Models\Order::STATUS_COMPLETED, 422, 'Reviews are available after delivery.');

        // если уже есть — просто редирект
        if ($item->review) {
            return redirect()
                ->route('orders.show', $order)
                ->with('success', 'Review already submitted.');
        }

        $data = $request->validate([
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'body'   => ['required', 'string', 'min:10', 'max:2000'],
            'is_anonymous' => ['nullable', 'boolean'],
        ]);

        $product = $item->product()->with(['category.game', 'categories.game'])->first();

        $category = null;
        if ($product) {
            $category = $product->category_id
                ? $product->category()->with('game')->first()
                : $product->categories()->with('game')->wherePivot('is_primary', true)->first();
            if (!$category) {
                $category = $product->categories()->with('game')->first();
            }
        }

        $game = $category?->game;

        // display name / avatar snapshots
        $displayName = $user->name ?? $user->email ?? 'Verified customer';
        $avatarUrl = $user->avatar_url ?? null; // если у тебя такого поля нет — останется null
        $isAnonymous = (bool) ($data['is_anonymous'] ?? false);

        Review::create([
            'user_id' => $user->id,
            'order_id' => $order->id,
            'order_item_id' => $item->id,

            'product_id' => $product?->id,
            'game_id' => $game?->id,

            'rating' => (int) $data['rating'],
            'body' => trim($data['body']),
            'status' => Review::STATUS_PENDING,

            'is_anonymous' => $isAnonymous,

            
            'display_name' => $user->name ?? $user->email ?? 'Verified customer',
            'avatar_url' => $user->avatar_url ?? null,

            'product_name' => $item->product_name,
            'product_image_url' => $product?->image_url,
            'game_name' => $game?->name,
            'game_image_url' => $game?->image_url,
        ]);

        return redirect()
            ->route('orders.show', $order)
            ->with('success', 'Review submitted and sent for moderation.');
    }
}
