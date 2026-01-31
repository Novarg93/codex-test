<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('seo_pages', function (Blueprint $t) {
            $t->id();

            $t->string('code')->unique(); // welcome, reviews, contact, about
            $t->string('name');           // readable label in admin

            // SEO
            $t->string('seo_title')->nullable();
            $t->string('seo_description')->nullable();
            $t->string('seo_og_title')->nullable();
            $t->string('seo_og_description')->nullable();
            $t->string('seo_og_image')->nullable();
            $t->boolean('seo_noindex')->default(false);
            $t->string('canonical_url')->nullable();
            $t->longText('seo_text')->nullable();

            $t->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('seo_pages');
    }
};
