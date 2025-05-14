<?php
$baseUrl = "https://restructuredpython.readthedocs.io"; // ReadTheDocs URL

// Get requested path after /docs
$requestPath = str_replace("/docs", "", $_SERVER['REQUEST_URI']);
$targetUrl = $baseUrl . $requestPath; // Append to ReadTheDocs URL

// Fetch content using cURL
$ch = curl_init($targetUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$response = curl_exec($ch);
curl_close($ch);

// Output the proxied content
echo $response;
?>
