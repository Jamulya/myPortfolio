<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php'
require 'phpmailer/src/PHPMailer.php'

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language');
$mail->ISHTML(true);

//ОТ кого письмо
$mail->setFrom('anarbekovaaijamal95@gmail.com', 'Mailer')
//Кому отправить 
$mail->addAddress('anarbekovaaijamal95@gmail.com');
//Тема письма
$mail->Subject = 'Hello! "This is Jama"';

//Тела письма 
$body = '<h1>Super message is coming</h1>';

if(trim(!empty($_POST['name']))){
  $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
  $body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
  $body.='<p><strong>Message:</strong>'.$_POST['message'].'</p>';
}

$mail->Body = $body;

//Sending
if (!$mail->send()) {
  $message = 'Error';
}else {
  $message = 'Thank you, your message was sent successfully!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>

