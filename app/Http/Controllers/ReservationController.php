<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Inertia\ResponseFactory;

class ReservationController extends Controller
{
    public function index(): Response|ResponseFactory
    {
        $reservations = Reservation::all()->toArray();

        return Inertia::render('Reservations/Index', [
            'reservations' => $reservations,
        ]);
    }

    public function store(?Request $request)
    {
        if ($request === null || $request->getContent() === '{}') {
            return Inertia::render('Reservations/Form');
        }

        $request->validate(
            [
                'room_number' => 'required|string',
                'check_in'    => 'required|date',
                'check_out'   => 'required|date',
            ]
        );

        $data            = $request->all();
        $data['user_id'] = auth()->id();
        Reservation::create($data);

        return Inertia::render('Reservations/Index', [
            'reservations' => Reservation::all()->toArray()
        ]);
    }


    public function update(Request $request, $id)
    {
        $reservation = Reservation::findOrFail($id);
        if ($request->getContent() === '{}') {
            return Inertia::render('Reservations/Form', ['reservation' => $reservation]);
        }

        $validatedData = $request->validate(
            [
                'room_number' => 'required|integer',
                'check_in'    => 'required|date',
                'check_out'   => 'required|date|after:check_in'
            ]
        );

        $reservation->update($validatedData);

        return Inertia::render('Reservations/Index', [
            'reservations' => Reservation::all()->toArray()
        ]);
    }


    public function destroy($id)
    {
        $reservation = Reservation::findOrFail($id);

        $reservation->delete();

        return Inertia::render('Reservations/Index', [
            'reservations' => Reservation::all()->toArray()
        ]);
    }
}

