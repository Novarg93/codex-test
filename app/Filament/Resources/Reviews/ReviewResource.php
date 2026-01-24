<?php

namespace App\Filament\Resources\Reviews;

use App\Filament\Resources\Reviews\Pages\CreateReview;
use App\Filament\Resources\Reviews\Pages\EditReview;
use App\Filament\Resources\Reviews\Pages\ListReviews;
use App\Models\Review;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class ReviewResource extends Resource
{
    protected static ?string $model = Review::class;

    // важно для глобального поиска/хлебных крошек/заголовков
    protected static ?string $recordTitleAttribute = 'display_name';

    // v4: типы шире, чем ?string
    protected static string|\BackedEnum|null $navigationIcon = 'heroicon-o-chat-bubble-left-right';
    protected static ?string $navigationLabel = 'Reviews';
    protected static string|\UnitEnum|null $navigationGroup = 'Content';

    public static function form(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Review')
                ->components([
                    Select::make('status')
                        ->options([
                            Review::STATUS_PENDING => 'Pending',
                            Review::STATUS_APPROVED => 'Approved',
                            Review::STATUS_REJECTED => 'Rejected',
                        ])
                        ->required(),

                    TextInput::make('rating')
                        ->numeric()
                        ->minValue(1)
                        ->maxValue(5)
                        ->required(),

                    Textarea::make('body')
                        ->rows(6)
                        ->required(),

                    Textarea::make('moderation_note')
                        ->rows(3)
                        ->helperText('Visible only in admin.'),
                ])
                ->columns(2),

            Section::make('Snapshots')
                ->components([
                    TextInput::make('display_name')->disabled(),
                    TextInput::make('avatar_url')->disabled(),

                    TextInput::make('game_name')->disabled(),
                    TextInput::make('product_name')->disabled(),

                    TextInput::make('game_image_url')->disabled(),
                    TextInput::make('product_image_url')->disabled(),
                ])
                ->columns(2)
                ->collapsed(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->defaultSort('created_at', 'desc')
            ->columns([
                TextColumn::make('status')->badge()->sortable(),
                TextColumn::make('rating')->sortable(),
                TextColumn::make('display_name')->searchable()->limit(24),

                TextColumn::make('game_name')
                    ->label('Game')
                    ->searchable()
                    ->toggleable(),

                TextColumn::make('product_name')
                    ->label('Product')
                    ->searchable()
                    ->limit(30),

                TextColumn::make('created_at')->dateTime()->sortable(),

                TextColumn::make('approved_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('status')->options([
                    Review::STATUS_PENDING => 'Pending',
                    Review::STATUS_APPROVED => 'Approved',
                    Review::STATUS_REJECTED => 'Rejected',
                ]),
                SelectFilter::make('rating')->options([
                    5 => '5',
                    4 => '4',
                    3 => '3',
                    2 => '2',
                    1 => '1',
                ]),
            ])
            ->recordActions([
                ViewAction::make(),

                Action::make('approve')
                    ->label('Approve')
                    ->visible(fn(Review $record) => $record->status !== Review::STATUS_APPROVED)
                    ->requiresConfirmation()
                    ->action(function (Review $record) {
                        $record->update([
                            'status' => Review::STATUS_APPROVED,
                            'approved_at' => Carbon::now(),
                            'rejected_at' => null,
                            'moderated_by' => Auth::id(),
                        ]);
                    }),

                Action::make('reject')
                    ->label('Reject')
                    ->color('danger')
                    ->visible(fn(Review $record) => $record->status !== Review::STATUS_REJECTED)
                    ->schema([
                        Textarea::make('moderation_note')
                            ->label('Reason (internal)')
                            ->rows(3),
                    ])
                    ->requiresConfirmation()
                    ->action(function (Review $record, array $data) {
                        $record->update([
                            'status' => Review::STATUS_REJECTED,
                            'rejected_at' => Carbon::now(),
                            'approved_at' => null,
                            'moderated_by' => Auth::id(),
                            'moderation_note' => $data['moderation_note'] ?? null,
                        ]);
                    }),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('bulkApprove')
                        ->label('Approve selected')
                        ->requiresConfirmation()
                        ->action(function (Collection $records) {
                            $records->each(function (Review $r) {
                                if ($r->status === Review::STATUS_APPROVED) {
                                    return;
                                }

                                $r->update([
                                    'status' => Review::STATUS_APPROVED,
                                    'approved_at' => Carbon::now(),
                                    'rejected_at' => null,
                                    'moderated_by' => Auth::id(),
                                ]);
                            });
                        }),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListReviews::route('/'),
            'create' => CreateReview::route('/create'),
            'edit' => EditReview::route('/{record}/edit'),
        ];
    }
}
