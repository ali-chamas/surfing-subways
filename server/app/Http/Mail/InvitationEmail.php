<?php 

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\ShouldQueue;
use Illuminate\Mailable;
use Illuminate\Queue\SerializesModels;

class HiMail extends Mailable{
    use Queueable, SerializesModels;

    public function build()
    {
        return $this->subject('Hi Email')
                    -> view('emails.hello');

    }
}