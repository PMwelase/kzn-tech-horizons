<?php
header('Content-Type: text/plain');

// Get the raw POST data
$data = file_get_contents('php://input');
$formData = json_decode($data, true);

console.log('Role: ', formData.role);
console.log('Name: ', formData.name);
console.log('Surname: ', formData.surname);
console.log('Email: ', formData.email);
console.log('Text: ', formData.text);

// Extract form fields
$role = $formData['role'];
$name = $formData['name'];
$surname = $formData['surname'];
$email = $formData['email'];
$text = $formData['text'];

// Set the recipient email address
if ($role =='volunteer'){
    $to = "volunteer@kznth.co.za";
}
else {
    $to = "partner@kznth.co.za";
}


// Set email subject
$subject = "New Inquiry: $role";

// Set email message
$message = "You have received a new inquiry:\n\n";
$message .= "Name: $name\n";
$surname .= "Surname: $surname\n";
$message .= "Email: $email\n";
$message .= "Message: $text\n";

// Set email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send the email
if (mail($to, $subject, $message, $headers)) {
    echo "Thank you! Your inquiry has been sent.";
} else {
    echo "Oops! Something went wrong and we couldn't send your inquiry.";
}
?>