<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('order_item_options')) return;

        Schema::table('order_item_options', function (Blueprint $table) {
            if (!Schema::hasColumn('order_item_options', 'option_group_id')) {
                $table->unsignedBigInteger('option_group_id')->nullable()->after('option_value_id');
            }

            if (!Schema::hasColumn('order_item_options', 'selected_min')) {
                $table->integer('selected_min')->nullable()->after('option_group_id');
            }

            if (!Schema::hasColumn('order_item_options', 'selected_max')) {
                $table->integer('selected_max')->nullable()->after('selected_min');
            }

            // так же: add, не change
            if (!Schema::hasColumn('order_item_options', 'price_delta_cents')) {
                $table->integer('price_delta_cents')->default(0)->after('selected_max');
            }

            if (!Schema::hasColumn('order_item_options', 'payload_json')) {
                $table->json('payload_json')->nullable()->after('price_delta_cents');
            }
        });

        try {
            Schema::table('order_item_options', function (Blueprint $table) {
                if (Schema::hasColumn('order_item_options', 'option_group_id')) {
                    $table->foreign('option_group_id')
                        ->references('id')->on('option_groups')
                        ->nullOnDelete();
                }
            });
        } catch (\Throwable $e) {
            // FK already exists — ignore
        }
    }

    public function down(): void
    {
        if (!Schema::hasTable('order_item_options')) return;

        try {
            Schema::table('order_item_options', function (Blueprint $table) {
                if (Schema::hasColumn('order_item_options', 'option_group_id')) {
                    $table->dropForeign(['option_group_id']);
                }
            });
        } catch (\Throwable $e) {}

        Schema::table('order_item_options', function (Blueprint $table) {
            $cols = [];

            foreach (['payload_json','price_delta_cents','selected_max','selected_min','option_group_id'] as $c) {
                if (Schema::hasColumn('order_item_options', $c)) $cols[] = $c;
            }

            if ($cols) $table->dropColumn($cols);
        });
    }
};