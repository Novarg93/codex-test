<?php

namespace App\Filament\Resources\SeoPages\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class SeoPageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('code')
                    ->required(),
                TextInput::make('name')
                    ->required(),
                TextInput::make('seo_title'),
                TextInput::make('seo_description'),
                TextInput::make('seo_og_title'),
                TextInput::make('seo_og_description'),
                FileUpload::make('seo_og_image')
                    ->image(),
                Toggle::make('seo_noindex')
                    ->required(),
                TextInput::make('canonical_url'),
                Textarea::make('seo_text')
                    ->columnSpanFull(),
            ]);
    }
}
