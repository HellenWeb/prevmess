<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Persons;
use App\Http\Requests\RequestSimply;

class RequestLog extends Controller
{
    public function submit(RequestSimply $req)
    {
        $persons = new Persons();

        $persons->email = $req->input('email');
        $persons->password = $req->input('password');

        $persons->save();
    }
}
