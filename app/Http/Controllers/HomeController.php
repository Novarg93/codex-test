<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Page;
use Illuminate\Support\Facades\Route;

use Illuminate\Foundation\Application;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $faqs = Faq::query()
            ->where('is_active', true)
            ->orderBy('order')
            ->get(['id', 'question', 'answer'])
            ->map(fn ($f) => [
                'question' => $f->question,
                'answer'   => $f->answer,
                'value'    => "item-{$f->id}",
            ]);

        return Inertia::render('Welcome', [
            'faqs' => $faqs,
            
            'seo' => seoPage('welcome', [
                'canonical' => url('/'),
            ]),
        ]);
    }
}
