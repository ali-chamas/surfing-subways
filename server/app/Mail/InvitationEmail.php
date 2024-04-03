<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;


class InvitationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $invitation;

    public function __construct()
    {

    }

    public function build()
    {
        return $this->subject('Invitation to Manage Station')
                    ->view('emails.invitation');
    }
}