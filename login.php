<?php
// Hardcoded usernames and passwords
$credentials = [
    'User' => 'Password',
];

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if username exists
    if (array_key_exists($username, $credentials)) {
        // Check if password matches
        if ($credentials[$username] == $password) {
            // Successful login
            echo "Login successful. Welcome, $username!";
        } else {
            // Incorrect password
            echo "Incorrect password. Please try again.";
        }
    } else {
        // Username not found
        echo "Username not found. Please try again.";
    }
}
?>
