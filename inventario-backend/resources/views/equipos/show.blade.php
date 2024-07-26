@extends('layout')

@section('content')
    <h1 class="mb-4">Detalle del Equipo</h1>
    <div class="card">
        <div class="card-body">
            <p><strong>ID:</strong> {{ $equipo->id }}</p>
            <p><strong>Nombre:</strong> {{ $equipo->nombre }}</p>
            <p><strong>Marca:</strong> {{ $equipo->marca }}</p>
            <p><strong>Modelo:</strong> {{ $equipo->modelo }}</p>
            <p><strong>Serial Inventario:</strong> {{ $equipo->serial_inventario }}</p>
            <p><strong>Asignado:</strong> {{ $equipo->asignado }}</p>
            <p><strong>Estado:</strong> {{ $equipo->estado }}</p>
            <a href="{{ route('equipos.index') }}" class="btn btn-secondary">Volver a la lista</a>
        </div>
    </div>
@endsection

