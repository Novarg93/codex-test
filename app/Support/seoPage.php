<?php

use App\Models\SeoPage;
use App\Support\Seo;

function seoPage(string $code, array $fallback = [])
{
    $page = SeoPage::where('code', $code)->first();

    return $page
        ? Seo::from($page, $fallback)
        : Seo::fromFallback($fallback);
}
