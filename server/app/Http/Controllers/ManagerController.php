<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class ManagerController extends Controller
{
    public function index(){
        $user = User::where('role_id', 2)->get();
        return response()->json($user);
    }

    public function update(Request $request ,$id){

        $user = User::findOrFail($id);

        $request->validate([
            'status' => 'required|string'
        ]);
        
        if ($request->status === 'banned'){
            $user->delete();
        }elseif($request->status === 'removedTemporarly'){
            $user->role_id = 4;
            $user->status = 'removedTemporarly';
            $user->save();
        }

        return response()->json([
            'message' => 'Manager status updated!'
        ], 200);
        
    }
}
