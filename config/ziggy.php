<?php

return [
    // Глобальные исключения
    'except' => [
        'filament.*',
        'telescope.*',
        'horizon.*',
        'ignition.*',
        'pulse.*',
        'sanctum.*',
        'debugbar.*',
        'livewire.*',
    ],

    // Группы — ТОЛЬКО массив паттернов (строк)
    'groups' => [
        'public' => [
            'home',
            'games.*',
            'categories.*',
            'products.*',
            'cart.*',
            'checkout.*',
            'orders.*',
            'profile.*',
            'login',
            'register',
            'logout',
            'password.*',
            'verification.*',
            'social.*',
            'reviews.*',
            'posts.*',
            'contact.*',
            'dashboard*',
        ],
    ],
];
