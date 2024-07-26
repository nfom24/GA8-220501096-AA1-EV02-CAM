<?php

namespace App\Http\Controllers;

use App\Models\Equipo;
use Illuminate\Http\Request;

class EquipoController extends Controller
{
    public function index()
    {
        $equipos = Equipo::all();
        return view('equipos.index', compact('equipos'));
    }

    public function create()
    {
        return view('equipos.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'marca' => 'required',
            'modelo' => 'required',
            'serial_inventario' => 'required',
            'asignado' => 'required',
            'estado' => 'required',
        ]);

        Equipo::create($request->all());
        return redirect()->route('equipos.index')->with('success', 'Equipo creado exitosamente.');
    }

    public function show(Equipo $equipo)
    {
        return view('equipos.show', compact('equipo'));
    }

    public function edit(Equipo $equipo)
    {
        return view('equipos.edit', compact('equipo'));
    }

    public function update(Request $request, Equipo $equipo)
    {
        $request->validate([
            'nombre' => 'required',
            'marca' => 'required',
            'modelo' => 'required',
            'serial_inventario' => 'required',
            'asignado' => 'required',
            'estado' => 'required',
        ]);

        $equipo->update($request->all());
        return redirect()->route('equipos.index')->with('success', 'Equipo actualizado exitosamente.');
    }

    public function destroy(Equipo $equipo)
    {
        $equipo->delete();
        return redirect()->route('equipos.index')->with('success', 'Equipo eliminado exitosamente.');
    }
}
