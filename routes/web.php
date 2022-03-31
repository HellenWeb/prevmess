<?php

use Illuminate\Support\Facades\Route;

Route::post('/api/submit/register', 'App\Http\Controllers\RequestLog@submit')->name('register');
