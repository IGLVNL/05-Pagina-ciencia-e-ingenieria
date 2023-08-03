<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $to = "iglvnl.mnj@gmail.com";
    $subject = "Nuevo mensaje de $nombre";
    $body = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";
    if (mail($to, $subject, $body)) {
        echo "Correo enviado correctamente.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>