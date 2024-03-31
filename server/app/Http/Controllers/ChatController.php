<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
    {

        $request->validate([
            'message' => 'required|string',
            'receiver_id' => 'required|exists:users,id',
        ]);

        $chat = new Chat();
        $chat->message = $request->message;
        $chat->sender_id = auth()->id();
        $chat->receiver_id = $request->receiver_id;
        $chat->save();

        return response()->json(['message' => 'Message sent successfully'], 201);
    }

    public function getChats(Request $request)
    {
        $chats = Chat::where('sender_id', auth()->id())
            ->orWhere('receiver_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($chats);
    }
}
