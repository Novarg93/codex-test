<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('order_item_id');

            $table->unsignedBigInteger('product_id')->nullable();
            $table->unsignedBigInteger('game_id')->nullable();

            $table->unsignedTinyInteger('rating'); // 1..5
            $table->text('body');

            // moderation
            $table->string('status', 20)->default('pending'); // pending|approved|rejected
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('rejected_at')->nullable();
            $table->unsignedBigInteger('moderated_by')->nullable();
            $table->text('moderation_note')->nullable();

            // public display snapshots
            $table->string('display_name', 80)->nullable();
            $table->string('avatar_url', 512)->nullable();

            // product/game snapshots
            $table->string('product_name', 255)->nullable();
            $table->string('product_image_url', 512)->nullable();
            $table->string('game_name', 255)->nullable();
            $table->string('game_image_url', 512)->nullable();

            $table->timestamps();

            // 1 review per order item
            $table->unique('order_item_id');

            $table->index(['status', 'approved_at']);
            $table->index(['product_id', 'status', 'approved_at']);
            $table->index(['game_id', 'status', 'approved_at']);

            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('order_id')->references('id')->on('orders')->cascadeOnDelete();
            $table->foreign('order_item_id')->references('id')->on('order_items')->cascadeOnDelete();
            $table->foreign('product_id')->references('id')->on('products')->nullOnDelete();
            $table->foreign('game_id')->references('id')->on('games')->nullOnDelete();
            $table->foreign('moderated_by')->references('id')->on('users')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};