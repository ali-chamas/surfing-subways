<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use App\Models\User;

class PasswordResetController extends Controller
{
    public function sendResetLink(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $email = $request->input('email');
        $otp = rand(1000, 9999);

        Mail::to($email)->send(new ResetPasswordMail($otp));

        $request->session()->put('reset_email', $email);
        $request->session()->put('reset_otp', $otp);

        return redirect()->back()->with('message', 'OTP has been sent to your email.');
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'otp' => 'required|numeric',
            'password' => 'required|confirmed',
        ]);

        $email = $request->session()->get('reset_email');
        $otp = $request->input('otp');
        $password = $request->input('password');

        if ($request->session()->get('reset_otp') == $otp) {
   
            $user = User::where('email', $email)->first();
            $user->password = bcrypt($password);
            $user->save();
            
            $request->session()->forget('reset_email');
            $request->session()->forget('reset_otp');

            return redirect()->route('login')->with('message', 'Password reset successfully.');
        } else {
            return redirect()->back()->with('error', 'Invalid OTP.');
        }
    }
}
