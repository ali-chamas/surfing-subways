<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InvitationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $sender;
    public $stationName;
    public $message;

    public function __construct($sender, $stationName, $message)
    {
        $this->sender = $sender;
        $this->stationName = $stationName;
        $this->message = $message;
    }

    public function build()
    {
        return $this->subject('Invitation to Manage Station')
                    ->view('emails.Hi');
    }
}
