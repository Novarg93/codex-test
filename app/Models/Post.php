<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'excerpt',
        'content',
        'cover_image',
        'status',
        'published_at',

        // SEO
        'seo_title',
        'seo_description',
        'seo_og_title',
        'seo_og_description',
        'seo_og_image',
        'seo_noindex',
        'canonical_url',
        'seo_text',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'seo_noindex' => 'bool',
    ];

    protected $appends = ['cover_image_url'];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    protected function coverImageUrl(): Attribute
    {
        return Attribute::get(function ($value, $attributes) {
            $path = $attributes['cover_image'] ?? null;

            if (!$path) return null;

            return (str_starts_with($path, 'http') || str_starts_with($path, '/'))
                ? $path
                : Storage::url($path);
        });
    }
}
