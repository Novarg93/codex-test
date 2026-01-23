<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        // если таблицы ещё нет — ничего не делаем (на пустой базе она создастся своей миграцией)
        if (!Schema::hasTable('cart_item_options')) return;

        Schema::table('cart_item_options', function (Blueprint $table) {
            if (!Schema::hasColumn('cart_item_options', 'option_group_id')) {
                $table->unsignedBigInteger('option_group_id')->nullable()->after('option_value_id');
            }

            if (!Schema::hasColumn('cart_item_options', 'selected_min')) {
                $table->integer('selected_min')->nullable()->after('option_group_id');
            }

            if (!Schema::hasColumn('cart_item_options', 'selected_max')) {
                $table->integer('selected_max')->nullable()->after('selected_min');
            }

            
            if (!Schema::hasColumn('cart_item_options', 'price_delta_cents')) {
                $table->integer('price_delta_cents')->default(0)->after('selected_max');
            }

            if (!Schema::hasColumn('cart_item_options', 'payload_json')) {
                $table->json('payload_json')->nullable()->after('price_delta_cents');
            }
        });

        // FK выносим отдельно: так проще жить с проверками
        // (Laravel не даёт нормально проверить "есть ли foreign key", поэтому делаем best-effort)
        try {
            Schema::table('cart_item_options', function (Blueprint $table) {
                // если column есть — пробуем повесить FK
                if (Schema::hasColumn('cart_item_options', 'option_group_id')) {
                    $table->foreign('option_group_id')
                        ->references('id')->on('option_groups')
                        ->nullOnDelete();
                }
            });
        } catch (\Throwable $e) {
            // если FK уже существует — молча игнорим
        }
    }

    public function down(): void
    {
        if (!Schema::hasTable('cart_item_options')) return;

        // сначала FK, потом колонки
        try {
            Schema::table('cart_item_options', function (Blueprint $table) {
                if (Schema::hasColumn('cart_item_options', 'option_group_id')) {
                    $table->dropForeign(['option_group_id']);
                }
            });
        } catch (\Throwable $e) {
            // если FK не было — игнор
        }

        Schema::table('cart_item_options', function (Blueprint $table) {
            $cols = [];

            foreach (['payload_json','price_delta_cents','selected_max','selected_min','option_group_id'] as $c) {
                if (Schema::hasColumn('cart_item_options', $c)) $cols[] = $c;
            }

            if ($cols) $table->dropColumn($cols);
        });
    }
};
