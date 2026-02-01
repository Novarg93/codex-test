<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $seo = \App\Support\Seo::fromFallback([
            'title' => 'Profile',
            'description' => 'Account settings',
            'canonical' => url(route('profile.edit', [], false)),
            'robots' => 'noindex,nofollow',
            'og_title' => 'Profile',
            'og_description' => 'Account settings',
            'og_type' => 'website',
        ]);


        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'seo' => $seo,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();

        $data = $request->validated();


        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $data['avatar'] = $path;
        }

        $user->fill($data);

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    private function mePayload(Request $request): array
    {
        $u = $request->user();

        // тут лучше отдавать ровно то, что реально нужно на страницах кабинета
        return $u->only([
            'id',
            'name',
            'full_name',
            'email',
            'email_verified_at',
            'role',

            'avatar',
            'avatar_url',

            'discord_user_id',
            'discord_username',
            'discord_avatar_url',

            'telegram_user_id',
            'telegram_username',
            'telegram_avatar_url',

            'google_user_id',
            'google_email',
            'google_avatar',
        ]);
    }

     public function dashboard(Request $request): Response
    {
        $seo = \App\Support\Seo::fromFallback([
            'title' => 'Dashboard',
            'description' => 'Account dashboard',
            'canonical' => url(route('dashboard', [], false)),
            'robots' => 'noindex,nofollow',
            'og_title' => 'Dashboard',
            'og_description' => 'Account dashboard',
            'og_type' => 'website',
        ]);

        return Inertia::render('Dashboard', [
            'seo' => $seo,
            'me'  => $this->mePayload($request),
        ]);
    }
}
