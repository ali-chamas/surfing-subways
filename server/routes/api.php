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
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\PassengerBookingController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\ManagerController;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



//user controllers

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});


Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);


//PassengerBooking Controllers

Route::post('users/{userId}/rides/{rideId}/purchase', [PassengerBookingController::class, 'purchaseTicket']);


//Ticket Controllers

Route::get('ticket',[TicketController::class, 'index']);
Route::post('ticket/{id}',[TicketController::class, 'update']);


//Manager Controllers

Route::get('manager',[ManagerController::class, 'index']);
Route::post('manager/{id}',[ManagerController::class, 'update']);


//role Controllers

Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::get('/roles/{id}', [RoleController::class, 'show']);
Route::post('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);


//rides Controllers

Route::get('/stationRides/{station_id}', [RideController::class, 'index']);
Route::get('/rides/{id}', [RideController::class, 'show']);
Route::post('/rides', [RideController::class, 'store']);
Route::post('/rides/{id}', [RideController::class, 'update']);
Route::delete('/rides/{id}', [RideController::class, 'destroy']);


//Chats Controllers

Route::post('/chats', [ChatController::class, 'sendMessage']);
Route::get('/chats', [ChatController::class, 'getChats']);
Route::post('/getChat', [ChatController::class, 'getChat']);



//CoinRequest Controllers

Route::post('/coin-requests', [CoinsRequestController::class, 'store']);
Route::get('/coin-requests', [CoinsRequestController::class, 'index']);
Route::get('/coin-requests/{id}', [CoinsRequestController::class, 'show']);
Route::post('/coin-requests/{id}', [CoinsRequestController::class, 'update']);
Route::delete('/coin-requests/{id}', [CoinsRequestController::class, 'destroy']);
Route::post('/coin-requests/{id}/process', [CoinsRequestController::class, 'processRequest']);


//BranchInvitation Controllers

Route::post('invitations', [InvitationController::class, 'sendInvitation']);
Route::delete('invitations/{id}', [InvitationController::class, 'cancelInvitation']);


//Station Controllers

Route::get('/stations', [StationController::class, 'index']);
Route::get('/stations/{id}', [StationController::class, 'show']);
Route::post('/stations', [StationController::class, 'store']);
Route::post('/stations/{id}', [StationController::class, 'update']);
Route::delete('/stations/{id}', [StationController::class, 'destroy']);

//facility Controllers

Route::get('/facilities', [FacilityController::class, 'index']);
Route::get('/facilities/{id}', [FacilityController::class, 'show']);
Route::post('/facilities', [FacilityController::class, 'store']);
Route::post('/facilities/{id}', [FacilityController::class, 'update']);
Route::delete('/facilities/{id}', [FacilityController::class, 'destroy']);


//BranchInvitation Controllers

Route::post('invitations', [InvitationController::class, 'invite']);
Route::delete('invitations/{id}', [InvitationController::class, 'invite']);

//RequestInvitation Controller
Route::post('/requestInvitation', [RequestController::class, 'sendContactForm']);
