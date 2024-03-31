<?php 

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'username' => 'required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'location' => 'required',
        ]);

        // Create a new user
        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'location' => $request->location,
            'status' => 'active', // Set default status for new users
            'role_id' => 1, // Assign role ID for passengers
        ]);

        // Generate a token for the newly registered user
        $token = $user->createToken('user_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user], 201);
    }
}
