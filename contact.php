<?php

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

function respond($status, $ok, $message)
{
    http_response_code($status);
    echo json_encode(['ok' => $ok, 'message' => $message], JSON_UNESCAPED_SLASHES);
    exit;
}

function text_length($value)
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Only POST requests are accepted.');
}

// Honeypot: bots normally fill this hidden field. Return success silently.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(200, true, 'Message received.');
}

session_start();
$now = time();
$lastSubmission = (int)($_SESSION['portfolio_contact_last'] ?? 0);
if ($lastSubmission > 0 && ($now - $lastSubmission) < 20) {
    respond(429, false, 'Please wait a few seconds before sending another message.');
}

$name = trim(strip_tags((string)($_POST['name'] ?? '')));
$email = trim((string)($_POST['email'] ?? ''));
$projectType = trim(strip_tags((string)($_POST['project_type'] ?? '')));
$message = trim(strip_tags((string)($_POST['message'] ?? '')));

if ($name === '' || text_length($name) > 80) {
    respond(422, false, 'Please enter a valid name.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || text_length($email) > 120) {
    respond(422, false, 'Please enter a valid email address.');
}

if ($projectType === '' || text_length($projectType) > 100) {
    respond(422, false, 'Please select the type of enquiry.');
}

if (text_length($message) < 10 || text_length($message) > 1600) {
    respond(422, false, 'Please write a message between 10 and 1600 characters.');
}

$recipient = 'abdulmueed5666@gmail.com';
$safeName = preg_replace('/[\r\n]+/', ' ', $name) ?: 'Portfolio visitor';
$safeEmail = preg_replace('/[\r\n]+/', '', $email) ?: '';
$safeType = preg_replace('/[\r\n]+/', ' ', $projectType) ?: 'Website enquiry';
$subject = 'Portfolio enquiry — ' . $safeType;

$rawHost = explode(':', (string)($_SERVER['HTTP_HOST'] ?? 'localhost'))[0];
$host = preg_replace('/[^a-z0-9.-]/i', '', $rawHost) ?: 'localhost';
$fromDomain = strpos($host, '.') !== false ? $host : 'localhost.localdomain';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Abdul Mueed Portfolio <noreply@' . $fromDomain . '>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$body = "New portfolio enquiry\n\n"
    . "Name: {$safeName}\n"
    . "Email: {$safeEmail}\n"
    . "Type: {$safeType}\n\n"
    . "Message:\n{$message}\n\n"
    . "Submitted: " . gmdate('Y-m-d H:i:s') . " UTC\n";

if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    respond(500, false, 'The server could not send the message. Please email abdulmueed5666@gmail.com directly.');
}

$_SESSION['portfolio_contact_last'] = $now;
respond(200, true, 'Thank you — your message has been sent.');
