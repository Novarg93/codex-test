<?php

namespace App\Filament\Resources\Reviews\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class ReviewForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Select::make('order_id')
                    ->relationship('order', 'id')
                    ->required(),
                Select::make('order_item_id')
                    ->relationship('orderItem', 'id')
                    ->required(),
                Select::make('product_id')
                    ->relationship('product', 'name'),
                Select::make('game_id')
                    ->relationship('game', 'name'),
                TextInput::make('rating')
                    ->required()
                    ->numeric(),
                Textarea::make('body')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('status')
                    ->required()
                    ->default('pending'),
                DateTimePicker::make('approved_at'),
                DateTimePicker::make('rejected_at'),
                TextInput::make('moderated_by')
                    ->numeric(),
                Textarea::make('moderation_note')
                    ->columnSpanFull(),
                TextInput::make('display_name'),
                TextInput::make('avatar_url'),
                TextInput::make('product_name'),
                FileUpload::make('product_image_url')
                    ->image(),
                TextInput::make('game_name'),
                FileUpload::make('game_image_url')
                    ->image(),
            ]);
    }
}
