<?php
// Sicherheitscheck: Nur Anfragen von erlaubten Domains akzeptieren
$allowed_domains = array(
  'niklasbennewitz.github.io'
);

// Prüfe HTTP Referer
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
$referer_host = parse_url($referer, PHP_URL_HOST);

$is_allowed = false;
foreach ($allowed_domains as $domain) {
  if (strpos($referer_host, $domain) !== false) {
    $is_allowed = true;
    break;
  }
}

// Wenn nicht von erlaubter Domain, Zugriff verweigern
if (!$is_allowed) {
  header("HTTP/1.0 403 Forbidden");
  die("Access denied");
}

// Prüfe ob POST-Daten vorhanden sind
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header("HTTP/1.0 405 Method Not Allowed");
  die("Method not allowed");
}

$body = "";
$body .= "Kontaktformular auf nbennewitz.de ausgefuellt am " . date("d.m.Y") . " um " . date("H:i");
$body .= "\n\nHier die Daten:";
$body .= "\n";
$body .= "\nName: \t" . $_POST["name"];
$body .= "\nE-mail: \t" . $_POST["email"];
$body .= "\nBetreff: \t" . $_POST["subject"];
$body .= "\n\nBemerkung:\n" . $_POST["text"];
$header = "";
$header .= "From: Niklas Bennewitz <niklas.bennewitz@echoload.com>\n";
$header .= "Content-Type: text/plain; charset=UTF-8\n";
mail("niklas.bennewitz@echoload.com", "Intressent Bewerbungshomepage", $body, $header);

if ($_POST["email_copy"]) {
  mail($_POST["email"], "Bewerbungshomepage Niklas Bennewitz", $body, $header);
}

// Redirect zur HTML-Seite
header("Location: https://niklasbennewitz.github.io/kontakt-antwort.html");
exit();
