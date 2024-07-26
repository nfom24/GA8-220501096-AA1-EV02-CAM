<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Equipo;
use Illuminate\Http\Request;

class EquipoController extends Controller
{
    public function index()
    {
        return response()->json(Equipo::all());
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

        $equipo = Equipo::create($request->all());

        return response()->json($equipo, 201);
    }

    public function show(Equipo $equipo)
    {
        return response()->json($equipo);
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

        return response()->json($equipo);
    }

    public function destroy(Equipo $equipo)
    {
        $equipo->delete();

        return response()->json(null, 204);
    }
}
