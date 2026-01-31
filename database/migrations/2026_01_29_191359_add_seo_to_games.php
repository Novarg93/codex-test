<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('games', function (Blueprint $t) {
            $t->string('seo_title')->nullable()->after('short');
            $t->string('seo_description')->nullable()->after('seo_title');
            $t->string('seo_og_title')->nullable()->after('seo_description');
            $t->string('seo_og_description')->nullable()->after('seo_og_title');
            $t->string('seo_og_image')->nullable()->after('seo_og_description');
            $t->boolean('seo_noindex')->default(false)->after('seo_og_image');
            $t->string('canonical_url')->nullable()->after('seo_noindex');
            $t->longText('seo_text')->nullable()->after('canonical_url');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('games', function (Blueprint $t) {
        $t->dropColumn([
            'seo_title',
            'seo_description',
            'seo_og_title',
            'seo_og_description',
            'seo_og_image',
            'seo_noindex',
            'canonical_url',
            'seo_text',
        ]);
    });
    }
};
