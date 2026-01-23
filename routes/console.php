<?php

use App\Models\User;
use Illuminate\Support\Facades\Artisan;

Artisan::command('user:show {email}', function (string $email) {
    $user = User::where('email', $email)->first();

    if (! $user) {
        $this->error("❌ Пользователь с email {$email} не найден.");
        return;
    }

    // Преобразуем модель в массив, чтобы увидеть ВСЕ поля
    $data = $user->toArray();

    // Выведем в виде таблицы — красиво и читаемо
    $this->table(['Поле', 'Значение'], collect($data)->map(function ($v, $k) {
        if (is_array($v)) $v = json_encode($v, JSON_UNESCAPED_UNICODE);
        return [$k, (string)$v];
    })->values());

    $this->info("✅ Отображены все поля пользователя {$email}");
})->describe('Показать все поля пользователя по email');