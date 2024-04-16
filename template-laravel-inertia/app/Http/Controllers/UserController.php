<?php

namespace App\Http\Controllers;

use App\Exports\UserExport;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf as FacadePdf;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return Inertia::render('User/Index', [
            'users' => $users
        ]);
    }

    public function store()
    {
        request()->validate([
            'name' => 'required',
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        User::create([
            'name' => request('name'),
            'username' => request('username'),
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);

        return redirect()->route('users.index');
    }

    public function edit(User $user)
    {
        return Inertia::render('User/Edit', [
            'user' => $user
        ]);
    }

    public function update(User $user) {
        request()->validate([
            'name' => 'required',
            'username' => 'required',
            'email' => 'required|email',
        ]);

        $user->update([
            'name' => request('name'),
            'username' => request('username'),
            'email' => request('email'),
        ]);

        return redirect()->route('users.index');

    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('users.index');
    }

    public function exportExcel()
    {
        return Excel::download(new UserExport, 'users.'.now().'.xlsx');
    }


    public function exportPDF()
    {
       $pdf = FacadePdf::loadView('pdf/users', ['users' => User::all()]);

       return response()->streamDownload(function () use ($pdf) {
           echo $pdf->stream();
       }, 'users.'.now().'.pdf');

    }
}
