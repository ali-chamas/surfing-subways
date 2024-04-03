<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Ticket;

class TicketController extends Controller
{
    public function index(){
        $tickets = Ticket::all();
        return response()->json($tickets);
    }
}
