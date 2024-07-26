@extends('layout')

@section('content')
<h1 class="mb-4">Lista de Equipos</h1>
<a href="{{ route('equipos.create') }}" class="btn btn-primary mb-3">Crear Equipo</a>
<table class="table table-striped">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Serial Inventario</th>
            <th>Asignado</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        @foreach($equipos as $equipo)
            <tr>
                <td>{{ $equipo->id }}</td>
                <td>{{ $equipo->nombre }}</td>
                <td>{{ $equipo->marca }}</td>
                <td>{{ $equipo->modelo }}</td>
                <td>{{ $equipo->serial_inventario }}</td>
                <td>{{ $equipo->asignado }}</td>
                <td>{{ $equipo->estado }}</td>
                <td>
                    <a href="{{ route('equipos.show', $equipo->id) }}" class="btn btn-info btn-sm">Ver</a>
                    <a href="{{ route('equipos.edit', $equipo->id) }}" class="btn btn-warning btn-sm">Editar</a>
                    <form action="{{ route('equipos.destroy', $equipo->id) }}" method="POST" style="display:inline-block;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger btn-sm">Eliminar</button>
                    </form>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
@endsection

