<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\SeoPage;

class SeoPageSeeder extends Seeder
{
    public function run(): void
    {
        SeoPage::firstOrCreate(
            ['code' => 'welcome'],
            ['name' => 'Homepage']
        );

        SeoPage::firstOrCreate(
            ['code' => 'reviews'],
            ['name' => 'Reviews']
        );

        SeoPage::firstOrCreate(
            ['code' => 'contact'],
            ['name' => 'Contact']
        );

        SeoPage::firstOrCreate(
            ['code' => 'about'],
            ['name' => 'About Us']
        );
    }
}