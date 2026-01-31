<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

class Game extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'seo_title',
        'seo_description',
        'seo_og_title',
        'seo_og_description',
        'seo_og_image',
        'seo_noindex',
        'canonical_url',
        'seo_text',
    ];
    protected $appends = ['image_url'];

    protected $casts = [        
        'seo_noindex' => 'bool',
    ];

    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }

    // Биндинг по slug для URL /games/{game:slug}
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    // Аксессор для автоматического преобразования image_url → полный URL
    protected function imageUrl(): Attribute
    {
        return Attribute::get(
            fn($value, $attributes) => (!empty($attributes['image']))
                ? (
                    str_starts_with($attributes['image'], 'http')
                    || str_starts_with($attributes['image'], '/')
                    ? $attributes['image']
                    : \Illuminate\Support\Facades\Storage::url($attributes['image'])
                )
                : null
        );
    }
}
