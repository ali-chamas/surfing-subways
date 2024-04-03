<?php

namespace App\Http\Controllers;

use App\Mail\RequestEmail;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RequestController extends Controller
{
    public function sendContactForm(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'station_name' => 'required',
            'content' => 'required'
        ]);

        $admins = User::where('role_id', 1)->get();

        foreach ($admins as $admin) {
            Mail::to($admin->email)->send(new RequestEmail($request->email, $request->station_name, $request->content));
        }

        return response()->json(['content' => 'Email sent successfully'], 200);
    }
}
