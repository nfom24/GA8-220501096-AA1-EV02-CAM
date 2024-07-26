@extends('layout')

@section('content')
    <h1 class="mb-4">Editar Equipo</h1>
    <form action="{{ route('equipos.update', $equipo->id) }}" method="POST">
        @csrf
        @method('PUT')
        @include('equipos.form')
        <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>
@endsection
