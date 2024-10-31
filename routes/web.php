<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth'])
     ->group(function () {
         Route::get('/reservations', [ReservationController::class, 'index']);
         Route::post('/reservations/create', [ReservationController::class, 'store']);
         Route::put('/reservations/edit/{reservation:id}', [ReservationController::class, 'update']);
         Route::delete('/reservations/{reservation}', [ReservationController::class, 'destroy']);
     });

Route::get('/login', [AuthController::class, 'showLogin']);
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/logout', [AuthController::class, 'logout']);
