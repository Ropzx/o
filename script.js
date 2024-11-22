// Hardcoded credentials (you can change these values)
const correctUsername = "admin";
const correctPassword = "pass"; // Set to "pass" as per your request

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered username and password match the hardcoded values
    if (username === correctUsername && password === correctPassword) {
        // Set sessionStorage to indicate the user is logged in
        sessionStorage.setItem("loggedIn", "true");
        // Redirect to o.html on success
        window.location.href = "o.html";
    } else {
        // Display an error message on failure
        document.getElementById("error-message").innerText = "Invalid username or password!";
    }
});
