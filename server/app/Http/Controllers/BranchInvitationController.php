<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class BranchInvitationController extends Controller
{
    public function sendInvitation(Request $request)
    {
        $request->validate([
            'manager_email' => 'required|email',
        ]);

        $admin = auth()->user(); 
        if (!$admin || $admin->role_id !== 3) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Generate a unique invitation token
        $invitationToken = Str::random(32);

        // Send l email lal manager
        Mail::send('emails.branch_invitation', ['token' => $invitationToken], function ($message) use ($request, $admin) {
            $message->from($admin->email, $admin->username)
                    ->to($request->manager_email)
                    ->subject('Invitation to join as branch manager');
        });

        return response()->json(['message' => 'Invitation sent successfully'], 200);
    }
}

