<?php


	header('Content-type: application/json');
     $ip = $_SERVER['REMOTE_ADDR'];
	$status = array(
		//'type'=>'success',
		//'message'=>'Thank you for contact us. As early as possible  we will contact you '
        
	);

    $begin .= '<html><body style="background:#1B1B1B;color:#fff;padding:30px">';
    $logo .= '<img src="https://www.hudri.sk/en/images/logo.png"/>';
    $name = @trim(stripslashes($_POST['name'])); 
    $email = @trim(stripslashes($_POST['email'])); 
    $phone = @trim(stripslashes($_POST['phone'])); 
    $message = @trim(stripslashes($_POST['message'])); 
    $end .= '</body></html>';

    $email_from = $email;
    $email_to = 'info@hudri.sk';//replace with your email

    $body = $begin . $logo . "\n\n" . 'Name: ' . $name . "\n\n" . 'IP: ' . $ip . "\n\n" . 'Email: ' . $email . "\n\n" .  'Phone: ' . $phone . "\n\n" . 'Message: ' . "\n\n" . $message . $end;

    $success = mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    header('Location: portfolio.html');
    die;

