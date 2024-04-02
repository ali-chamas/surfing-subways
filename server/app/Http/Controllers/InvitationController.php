<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvitationEmail;

class InvitationController extends Controller
{
    public function sendInvitation(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'station_name' => 'required|string',
            'message' => 'required|string',
        ]);

        $user = auth()->user();

        if ($user) {

            $senderName = $user->name;
        } else {
            $senderName = 'Anonymous';
        }

        $admin = User::where('role_id', 1)->first();

        if ($admin) {
            return view('emails.hi', [
                'sender' => (object) ['name' => $senderName],
                'stationName' => $request->station_name,
                'message' => $request->message,
            ]);
        } else {
            return response()->json(['message' => 'Admin not found'], 404);
        }
    }


}