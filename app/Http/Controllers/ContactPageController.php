<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ContactPageController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Contact/Show', [
            'seo' => seoPage('contact', [
                'canonical' => url(route('contact.show', [], false)),
                'title' => 'Contact us',
                'description' => 'Contact our support team.',
                'og_type' => 'website',
                // 'og_image' => '/images/og-default.png', // если будет дефолт
            ]),
        ]);
    }
}
