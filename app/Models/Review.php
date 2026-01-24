<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    public const STATUS_PENDING  = 'pending';
    public const STATUS_APPROVED = 'approved';
    public const STATUS_REJECTED = 'rejected';

    protected $fillable = [
        'user_id',
        'order_id',
        'order_item_id',
        'product_id',
        'game_id',
        'rating',
        'body',
        'status',
        'approved_at',
        'rejected_at',
        'moderated_by',
        'moderation_note',
        'display_name',
        'avatar_url',
        'product_name',
        'product_image_url',
        'game_name',
        'game_image_url',
        'is_anonymous',
    ];

    protected $casts = [
        'rating' => 'integer',
        'approved_at' => 'datetime',
        'rejected_at' => 'datetime',
        'is_anonymous' => 'bool',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function orderItem(): BelongsTo
    {
        return $this->belongsTo(OrderItem::class, 'order_item_id', 'id');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }
}
