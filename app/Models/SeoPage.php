<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeoPage extends Model
{
    protected $fillable = [
        'code',
        'name',
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
        'seo_noindex' => 'bool',
    ];
}
