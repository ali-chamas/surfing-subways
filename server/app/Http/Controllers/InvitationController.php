<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invitation;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvitationEmail;

class InvitationController extends Controller
{
    public function sendInvitation($recipient)
    {
        Mail::to($recipient)->send(new InvitationEmail());
        return true;
    }

    public function invite(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
        ]);


        $invitation = Invitation::create([
            'branch_email' => $request->email,
        ]);

        

        if ($this->sendInvitation($invitation->branch_email)) {
            return response()->json(['message' => 'Invitation sent successfully'], 200);
        } else {
            return response()->json(['message' => 'Failed to send invitation'], 500);
        }
    }
}
