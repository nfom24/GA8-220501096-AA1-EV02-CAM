<div class="form-group">
    <label for="nombre">Nombre:</label>
    <input type="text" name="nombre" class="form-control" value="{{ old('nombre', $equipo->nombre ?? '') }}" required>
</div>
<div class="form-group">
    <label for="marca">Marca:</label>
    <input type="text" name="marca" class="form-control" value="{{ old('marca', $equipo->marca ?? '') }}" required>
</div>
<div class="form-group">
    <label for="modelo">Modelo:</label>
    <input type="text" name="modelo" class="form-control" value="{{ old('modelo', $equipo->modelo ?? '') }}" required>
</div>
<div class="form-group">
    <label for="serial_inventario">Serial Inventario:</label>
    <input type="text" name="serial_inventario" class="form-control" value="{{ old('serial_inventario', $equipo->serial_inventario ?? '') }}" required>
</div>
<div class="form-group">
    <label for="asignado">Asignado:</label>
    <input type="text" name="asignado" class="form-control" value="{{ old('asignado', $equipo->asignado ?? '') }}" required>
</div>
<div class="form-group">
    <label for="estado">Estado:</label>
    <select name="estado" class="form-control" required>
        <option value="activo" {{ old('estado', $equipo->estado ?? '') == 'activo' ? 'selected' : '' }}>Activo</option>
        <option value="mantenimiento" {{ old('estado', $equipo->estado ?? '') == 'mantenimiento' ? 'selected' : '' }}>Mantenimiento</option>
        <option value="baja" {{ old('estado', $equipo->estado ?? '') == 'baja' ? 'selected' : '' }}>Baja</option>
    </select>
</div>
