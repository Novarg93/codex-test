<?php

namespace App\Filament\Forms\Components;

use Filament\Schemas\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;

class SeoSection
{
    public static function make(): Section
    {
        return Section::make('SEO')
            ->collapsed()
            ->schema([
                TextInput::make('seo_title')
                    ->label('SEO Title')
                    ->maxLength(70),

                Textarea::make('seo_description')
                    ->label('SEO Description')
                    ->rows(3)
                    ->maxLength(170),

                TextInput::make('seo_og_title')->label('OG Title')->maxLength(80),
                Textarea::make('seo_og_description')->label('OG Description')->rows(2)->maxLength(200),

                FileUpload::make('seo_og_image')
                    ->label('OG Image')
                    ->directory('seo')
                    ->image()
                    ->imageEditor(),

                Toggle::make('seo_noindex')->label('Noindex'),

                TextInput::make('canonical_url')
                    ->label('Canonical URL override')
                    ->placeholder('https://example.com/...'),

                RichEditor::make('seo_text')
                    ->label('SEO Text (bottom of page)')
                    ->columnSpanFull(),
            ])
            ->columns(2);
    }
}
