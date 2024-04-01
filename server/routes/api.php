<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RideController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CoinsRequestController;
use App\Http\Controllers\StationController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\StationFacilityController;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



//user controllers

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);


//auth Controllers

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);


//role Controllers

Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::get('/roles/{id}', [RoleController::class, 'show']);
Route::put('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);


//rides Controllers

Route::get('/rides', [RideController::class, 'index']);
Route::get('/rides/{id}', [RideController::class, 'show']);
Route::post('/rides', [RideController::class, 'store']);
Route::put('/rides/{id}', [RideController::class, 'update']);
Route::delete('/rides/{id}', [RideController::class, 'destroy']);


//Chats Controllers
Route::post('/chats', [ChatController::class, 'sendMessage']);
Route::get('/chats', [ChatController::class, 'getChats']);



//CoinRequest Controllers

Route::post('/coin-requests', [CoinsRequestController::class, 'store']);
Route::get('/coin-requests', [CoinsRequestController::class, 'index']);
Route::get('/coin-requests/{id}', [CoinsRequestController::class, 'show']);
Route::put('/coin-requests/{id}', [CoinsRequestController::class, 'update']);
Route::delete('/coin-requests/{id}', [CoinsRequestController::class, 'destroy']);
Route::put('/coin-requests/{id}/process', [CoinsRequestController::class, 'processRequest']);


//BranchInvitation Controllers

use App\Http\Controllers\InvitationController;

// Define routes for sending invitations and canceling invitations
Route::post('invitations', [InvitationController::class, 'sendInvitation']);
Route::delete('invitations/{id}', [InvitationController::class, 'cancelInvitation']);


//Station Controllers

Route::get('/stations', [StationController::class, 'index']);
Route::get('/stations/{id}', [StationController::class, 'show']);
Route::post('/stations', [StationController::class, 'store']);
Route::put('/stations/{id}', [StationController::class, 'update']);
Route::delete('/stations/{id}', [StationController::class, 'destroy']);


//StationFacility Controllers

Route::get('/station_facilities', [StationFacilityController::class, 'index']);
Route::get('/station_facilities/{id}', [StationFacilityController::class, 'show']);
Route::post('/station_facilities', [StationFacilityController::class, 'store']);
Route::put('/station_facilities/{id}', [StationFacilityController::class, 'update']);
Route::delete('/station_facilities/{id}', [StationFacilityController::class, 'destroy']);


//facility Controllers

Route::get('/facilities', [FacilityController::class, 'index']);
Route::get('/facilities/{id}', [FacilityController::class, 'show']);
Route::post('/facilities', [FacilityController::class, 'store']);
Route::put('/facilities/{id}', [FacilityController::class, 'update']);
Route::delete('/facilities/{id}', [FacilityController::class, 'destroy']);
