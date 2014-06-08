<?php


function spamcheck($field) {
// Sanitize e-mail address
  	$field=filter_var($field, FILTER_SANITIZE_EMAIL);
  	// Validate e-mail address
  	if(filter_var($field, FILTER_VALIDATE_EMAIL)) {
    	return TRUE;
  	} else {
    	return FALSE;
  	}
}


if(isset($_POST["email"])) {
    // Check if "from" email address is valid
    $mailcheck = spamcheck($_POST["email"]);
    if ($mailcheck==FALSE) {
      echo "Invalid input";
      $sendFrom = FALSE;
    } else {
      $email = $_POST["email"]; // sender
	}
}

$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$comments = $_POST['comments'];



$email_pre = 'contact@indiweb.com.mx';


if(isset($email_pre)) {
    // Check if "from" email address is valid
    $mailcheck = spamcheck($email_pre);
    if ($mailcheck==FALSE) {
      echo "Invalid input";
      $sendRoot = FALSE;
    } else {
      $email_from = $email_pre; // sender
	}
}

$email_subject = 'IndiWeb MX submission';
$email_body = "From: $fullname \r\n" . "Phone: $phone \r\n" . "Email: $email \r\n" .
"City: $city \r\n" . "Comments: $comments \r\n";

/*'Name: $fullname \n
Phone: $phone \n
e-mail: $email \n
City: $city \n
Message: \n
$comments'; */


$to = "perez.alejandro09@gmail.com";
 
$headers = "From: $email_from \r\n";


if($sendRoot === FALSE || $sendFrom === FALSE) {
	echo "INVALID";
} else {
	mail($to,$email_subject,$email_body,$headers);
}
