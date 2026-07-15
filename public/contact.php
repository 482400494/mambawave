<?php
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

// Read JSON from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid payload"]);
    exit;
}

$name = isset($data['name']) ? htmlspecialchars(strip_tags(trim($data['name']))) : '';
$email = isset($data['email']) ? htmlspecialchars(strip_tags(trim($data['email']))) : '';
$message = isset($data['message']) ? htmlspecialchars(strip_tags(trim($data['message']))) : '';

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields"]);
    exit;
}

$to = 'boommambawave@gmail.com';
$subject = "Nuevo Contacto de $name (Boom Mamba Wave)";

$body = "
<html>
<head>
  <title>Nuevo contacto desde Boom Mamba Wave</title>
</head>
<body style='font-family: sans-serif; line-height: 1.6; color: #333;'>
  <h2>Tienes un nuevo mensaje de contacto</h2>
  <p><strong>Nombre:</strong> $name</p>
  <p><strong>Email o WhatsApp:</strong> $email</p>
  <p><strong>Tipo de negocio / Interés:</strong><br/>" . nl2br($message) . "</p>
  <hr/>
  <p style='font-size: 0.9em; color: #888;'>Este correo fue enviado automáticamente desde el formulario web.</p>
</body>
</html>
";

$domain = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'boommamba.com';
$fromEmail = "no-reply@" . preg_replace('/^www\./', '', $domain);

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Formulario <" . $fromEmail . ">" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    $error = error_get_last();
    echo json_encode(["error" => "Failed to send email. Check server mail configuration.", "details" => $error]);
}
?>
