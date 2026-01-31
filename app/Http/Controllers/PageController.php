<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Inertia\Inertia;
use App\Support\Seo;

class PageController extends Controller
{
    public function show(Page $page)
    {
        $canonical = url(route('legal.show', [$page->code], false));

        $seo = Seo::from($page, [
            'canonical' => $canonical,
            'title' => $page->name . ' — ' . config('app.name'),
            'description' => null, // можно оставить null, если seo_description пустой
            'og_type' => 'website',
            // 'og_image' => '/images/og-default.png', // если появится дефолтная
        ]);

        return Inertia::render('Pages/Show', [
            'seo' => $seo,
            'page' => [
                'id' => $page->id,
                'name' => $page->name,
                'code' => $page->code,
                'text' => $page->text,
            ],
        ]);
    }
}
