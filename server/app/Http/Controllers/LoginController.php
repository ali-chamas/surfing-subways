<?php

// namespace App\Http\Controllers;

// use Tymon\JWTAuth\Facades\JWTAuth;
// use Illuminate\Http\Request;

// class LoginController extends Controller
// {
//     public function login(Request $request)
//     {
//         $credentials = $request->only('email', 'password');
//         if (!auth()->attempt($credentials)) {
//             return response()->json(['error' => 'Unauthorized'], 401);
//         }

//         $token = JWTAuth::fromUser(auth()->user());

//         return response()->json(compact('token'));
//     }
// }
