<?php


namespace App\Http\Controllers;

use App\Models\Game;
use Inertia\Inertia;
use App\Support\Seo;


class GameController extends Controller
{
    public function index()
    {
        // Берём реальное поле image, а URL даёт аксессор image_url
        $games = Game::query()
            ->orderBy('name')
            ->get(['id', 'name', 'slug', 'image'])   // <-- ВАЖНО: НИКАКИХ '"image_url"'
            ->map(fn($game) => [
                'id' => $game->id,
                'name' => $game->name,
                'slug' => $game->slug,
                'image_url' => $game->image_url,     // из аксессора
            ]);

        return Inertia::render('Games/Index', ['games' => $games]);
    }

    public function show(Game $game)
    {
        $game->load(['categories:id,game_id,name,slug,type,image']);


        $seo = Seo::from($game, [
            'canonical' => url(route('games.show', [$game->slug], false)),
            'title' => "{$game->name} Services",
            'description' => $game->short ?? $game->description,
            'og_image' => $game->image_url,
        ]);

        return Inertia::render('Games/Show', ['game' => $game, 'seo' => $seo,]);
    }
}
