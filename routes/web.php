<?php

use Illuminate\Support\Facades\Route;

Route::post('/api/submit/register', 'App\Http\Controllers\RequestLog@submit')->name('register');
Route::post('/api/submit/login', 'App\Http\Controllers\RequestLog@login')->name('login');
