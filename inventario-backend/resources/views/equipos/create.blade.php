@extends('layout')

@section('content')
    <h1 class="mb-4">Crear Equipo</h1>
    <form action="{{ route('equipos.store') }}" method="POST">
        @csrf
        @include('equipos.form')
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
@endsection
