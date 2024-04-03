<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RequestEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $email;
    public $stationName;
    public $content;

    public function __construct($email, $stationName, $content)
    {
        $this->email = $email;
        $this->stationName = $stationName;
        $this->content = $content;
    }

    public function build()
    {
        $email = $this->email;
        $stationName = $this->stationName;
        $content = $this->content;
        
        return $this->subject('Invitation to Manage Station')
                ->view('emails.contactUs', compact( 'email', 'stationName', 'content'));
    }
}
