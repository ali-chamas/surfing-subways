<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;
use App\Models\User;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
{
    $request->validate([
        'message' => 'required|string',
        'receiver' => 'required|exists:users,id',
        'sender' => 'required|exists:users,id',
    ]);

    $receiverId = $request->input('receiver');
    $senderId = $request->input('sender');

    $receiver = User::find($receiverId);
    $sender = User::find($senderId);

    if (!$receiver) {
        return response()->json(['error' => 'Receiver not found'], 404);
    }

    if (!$sender) {
        return response()->json(['error' => 'Sender not found'], 404);
    }

    $chat = new Chat();
    $chat->message = $request->input('message');
    $chat->receiver = $receiverId;
    $chat->sender= $senderId;
    $chat->save();

    return response()->json(['message' => 'Message sent successfully'], 201);
}


}
