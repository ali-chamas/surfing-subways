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

    // Find a user with the specified receiver ID
    $receiver = User::find($receiverId);
    $sender = User::find($senderId);

    if (!$receiver) {
        return response()->json(['error' => 'Receiver not found'], 404);
    }

    if (!$sender) {
        return response()->json(['error' => 'Sender not found'], 404);
    }

    // Create and save the chat message
    $chat = new Chat();
    $chat->message = $request->input('message');
    $chat->receiver_id = $receiverId;
    $chat->sender_id = $senderId;
    $chat->save();

    return response()->json(['message' => 'Message sent successfully'], 201);
}


}
