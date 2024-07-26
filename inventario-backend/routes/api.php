<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EquipoController;

Route::apiResource('equipos', EquipoController::class);

