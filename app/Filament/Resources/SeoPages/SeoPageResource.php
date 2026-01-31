<?php

namespace App\Filament\Resources\SeoPages;

use App\Filament\Resources\SeoPages\Pages\CreateSeoPage;
use App\Filament\Resources\SeoPages\Pages\EditSeoPage;
use App\Filament\Resources\SeoPages\Pages\ListSeoPages;
use BackedEnum;
use UnitEnum;
use Filament\Support\Icons\Heroicon;
use App\Filament\Forms\Components\SeoSection;
use App\Models\SeoPage;
use Filament\Tables\Columns\TextColumn;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class SeoPageResource extends Resource
{
    protected static ?string $model = SeoPage::class;

    protected static string|UnitEnum|null $navigationGroup = 'SEO';
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMagnifyingGlass;
    protected static ?string $navigationLabel = 'SEO Pages';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return $schema->schema([
            \Filament\Forms\Components\TextInput::make('name')
                ->required()
                ->maxLength(120),

            \Filament\Forms\Components\TextInput::make('code')
                ->required()
                ->maxLength(64)
                ->unique(ignoreRecord: true)
                ->helperText('Example: welcome, reviews, contact')
                ->disabled(fn($record) => $record !== null),

            SeoSection::make(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable(),
                TextColumn::make('code')->badge(),
                TextColumn::make('updated_at')->dateTime(),
            ])
            ->defaultSort('name');
    }

    public static function getPages(): array
    {
        return [
            'index' => ListSeoPages::route('/'),
            'create' => CreateSeoPage::route('/create'),
            'edit' => EditSeoPage::route('/{record}/edit'),
        ];
    }
}
