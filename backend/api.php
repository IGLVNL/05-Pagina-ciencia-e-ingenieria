<?php
// Detalles de conexión proporcionados por Railway
$host = 'containers-us-west-194.railway.app';
$user = 'root';
$password = 'M5PTiIUr8v5EOXrbjHfS';
$database = 'railway';

// Establecer la conexión con la base de datos
$conexion = mysqli_connect($host, $user, $password, $database);

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die('Error al conectar a la base de datos: ' . mysqli_connect_error());
}

// Realizar la consulta para obtener el registro
$query = "SELECT pass FROM contraseñas"; // Cambia 'contraseñas' por el nombre de tu tabla y 'id' por el campo que identifica al registro que quieres obtener
$resultado = mysqli_query($conexion, $query);

// Verificar si se obtuvieron resultados
if (mysqli_num_rows($resultado) > 0) {
    $registro = mysqli_fetch_assoc($resultado);
    $pass = $registro['pass'];

    // Devolver el resultado como una respuesta JSON
    echo json_encode(['pass' => $pass]);
} else {
    // Devolver un mensaje de error
    echo json_encode(['error' => 'No se encontraron registros']);
}

// Cuando hayas terminado, cierra la conexión
mysqli_close($conexion);
?>
