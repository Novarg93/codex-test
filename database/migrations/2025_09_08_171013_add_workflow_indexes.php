<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    private function indexExists(string $table, string $index): bool
    {
        return Schema::hasIndex($table, $index);
    }

    private function isSqlite(): bool
    {
        return DB::getDriverName() === 'sqlite';
    }

    private function isMySql(): bool
    {
        return DB::getDriverName() === 'mysql';
    }

    public function up(): void
    {
        // order_items
        if (! $this->indexExists('order_items', 'oi_status_order_id_id_idx')) {
            Schema::table('order_items', function (Blueprint $t): void {
                $t->index(['status', 'order_id', 'id'], 'oi_status_order_id_id_idx');
            });
        }

        if (! $this->indexExists('order_items', 'oi_order_id_id_idx')) {
            Schema::table('order_items', function (Blueprint $t): void {
                $t->index(['order_id', 'id'], 'oi_order_id_id_idx');
            });
        }

        // link_screen: префиксный индекс возможен только в MySQL
        if (! $this->indexExists('order_items', 'oi_link_screen_idx')) {
            if ($this->isMySql()) {
                DB::statement('CREATE INDEX oi_link_screen_idx ON order_items (link_screen(191))');
            } else {
                // SQLite / PgSQL и т.п.: обычный индекс без префикса
                Schema::table('order_items', function (Blueprint $t): void {
                    $t->index(['link_screen'], 'oi_link_screen_idx');
                });
            }
        }

        // order_item_options
        if (! $this->indexExists('order_item_options', 'oio_item_title_idx')) {
            Schema::table('order_item_options', function (Blueprint $t): void {
                $t->index(['order_item_id', 'title'], 'oio_item_title_idx');
            });
        }

        // users
        foreach ([
            ['users', 'users_email_idx', ['email']],
            ['users', 'users_name_idx', ['name']],
            ['users', 'users_full_name_idx', ['full_name']],
        ] as [$table, $name, $cols]) {
            if (! $this->indexExists($table, $name)) {
                Schema::table($table, function (Blueprint $t) use ($cols, $name): void {
                    $t->index($cols, $name);
                });
            }
        }
    }

    public function down(): void
    {
        // dropIndex через Schema — самый кросс-БД вариант
        if ($this->indexExists('order_items', 'oi_link_screen_idx')) {
            Schema::table('order_items', function (Blueprint $t): void {
                $t->dropIndex('oi_link_screen_idx');
            });
        }

        if ($this->indexExists('order_items', 'oi_order_id_id_idx')) {
            Schema::table('order_items', function (Blueprint $t): void {
                $t->dropIndex('oi_order_id_id_idx');
            });
        }

        if ($this->indexExists('order_items', 'oi_status_order_id_id_idx')) {
            Schema::table('order_items', function (Blueprint $t): void {
                $t->dropIndex('oi_status_order_id_id_idx');
            });
        }

        if ($this->indexExists('order_item_options', 'oio_item_title_idx')) {
            Schema::table('order_item_options', function (Blueprint $t): void {
                $t->dropIndex('oio_item_title_idx');
            });
        }

        if ($this->indexExists('users', 'users_email_idx')) {
            Schema::table('users', function (Blueprint $t): void {
                $t->dropIndex('users_email_idx');
            });
        }

        if ($this->indexExists('users', 'users_name_idx')) {
            Schema::table('users', function (Blueprint $t): void {
                $t->dropIndex('users_name_idx');
            });
        }

        if ($this->indexExists('users', 'users_full_name_idx')) {
            Schema::table('users', function (Blueprint $t): void {
                $t->dropIndex('users_full_name_idx');
            });
        }
    }
};
