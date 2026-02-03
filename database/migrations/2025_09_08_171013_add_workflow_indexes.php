<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

return new class extends Migration {
    private function indexExists(string $table, string $index): bool
    {
        $db = DB::getDatabaseName();

        return DB::table('information_schema.statistics')
            ->where('table_schema', $db)
            ->where('table_name', $table)
            ->where('index_name', $index)
            ->exists();
    }

    public function up(): void
    {
        // order_items
        if (! $this->indexExists('order_items', 'oi_status_order_id_id_idx')) {
            Schema::table('order_items', fn (Blueprint $t) =>
                $t->index(['status', 'order_id', 'id'], 'oi_status_order_id_id_idx')
            );
        }

        if (! $this->indexExists('order_items', 'oi_order_id_id_idx')) {
            Schema::table('order_items', fn (Blueprint $t) =>
                $t->index(['order_id', 'id'], 'oi_order_id_id_idx')
            );
        }

        if (! $this->indexExists('order_items', 'oi_link_screen_idx')) {
            // префиксный индекс лучше делать raw
            DB::statement('CREATE INDEX oi_link_screen_idx ON order_items (link_screen(191))');
        }

        // order_item_options
        if (! $this->indexExists('order_item_options', 'oio_item_title_idx')) {
            Schema::table('order_item_options', fn (Blueprint $t) =>
                $t->index(['order_item_id', 'title'], 'oio_item_title_idx')
            );
        }

        // users
        foreach ([
            ['users', 'users_email_idx', ['email']],
            ['users', 'users_name_idx', ['name']],
            ['users', 'users_full_name_idx', ['full_name']],
        ] as [$table, $name, $cols]) {
            if (! $this->indexExists($table, $name)) {
                Schema::table($table, fn (Blueprint $t) => $t->index($cols, $name));
            }
        }
    }

    public function down(): void
    {
        // можно аккуратно дропать тоже с проверкой
        foreach ([
            ['order_items', 'oi_link_screen_idx'],
            ['order_items', 'oi_order_id_id_idx'],
            ['order_items', 'oi_status_order_id_id_idx'],
            ['order_item_options', 'oio_item_title_idx'],
            ['users', 'users_email_idx'],
            ['users', 'users_name_idx'],
            ['users', 'users_full_name_idx'],
        ] as [$table, $name]) {
            if ($this->indexExists($table, $name)) {
                DB::statement("DROP INDEX {$name} ON {$table}");
            }
        }
    }
};
