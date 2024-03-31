<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invitation;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvitationEmail;

class InvitationController extends Controller
{
    public function sendInvitation(Request $request)
    {
        $request->validate([
            'from' => 'required|exists:users,id',
            'to' => 'required|exists:users,id',
        ]);

        $invitation = Invitation::create([
            'from' => $request->from,
            'to' => $request->to,
        ]);

        $sender = User::findOrFail($request->from);
        $receiver = User::findOrFail($request->to);

        Mail::to($receiver->email)->send(new InvitationEmail($sender, $receiver));

        return response()->json(['message' => 'Invitation sent successfully', 'invitation' => $invitation], 200);
    }

    public function cancelInvitation(Request $request, $id)
    {
        $invitation = Invitation::findOrFail($id);
        $invitation->delete();

        return response()->json(['message' => 'Invitation canceled successfully'], 200);
    }
}
