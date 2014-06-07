<?php

$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$city = $_POST['city'];
$comments = $_POST['comments'];


$email_from = 'contact@indiweb.com.mx';
$email_subject = 'IndiWeb MX submission';
$email_body = 'test';

/*'Name: $fullname \n
Phone: $phone \n
e-mail: $email \n
City: $city \n
Message: \n
$comments'; */


$to = "perez.alejandro09@gmail.com";
 
$headers = "From: $email_from \r\n";
 
mail($to,$email_subject,$email_body,$headers);