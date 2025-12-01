<?php
// document upload placeholder
require_once __DIR__ . '/../utils/response.php';
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    // TODO: handle uploaded file
    respond_json(['ok' => true, 'message' => 'file received (placeholder)']);
} else {
    respond_json(['ok' => false, 'error' => 'method']);
}
