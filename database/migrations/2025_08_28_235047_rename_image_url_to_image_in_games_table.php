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
        if (
            Schema::hasTable('games')
            && Schema::hasColumn('games', 'image_url')
            && !Schema::hasColumn('games', 'image')
        ) {
            Schema::table('games', function (Blueprint $table) {
                $table->renameColumn('image_url', 'image');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (
            Schema::hasTable('games')
            && Schema::hasColumn('games', 'image')
            && !Schema::hasColumn('games', 'image_url')
        ) {
            Schema::table('games', function (Blueprint $table) {
                $table->renameColumn('image', 'image_url');
            });
        }
    }
};
