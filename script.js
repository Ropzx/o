// Hardcoded credentials (for demonstration purposes)
const correctUsername = "admin";
const correctPassword = "password123"; // Set your own password

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered username and password match the hardcoded values
    if (username === correctUsername && password === correctPassword) {
        // Store session data to track user login
        sessionStorage.setItem("loggedIn", "true");
        // Redirect to o.html
        window.location.href = "o.html";
    } else {
        // Show an error message if login is incorrect
        document.getElementById("error-message").innerText = "Invalid username or password!";
    }
});
