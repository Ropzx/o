document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting

    // Hardcoded username and password
    const username = "user";
    const password = "password";

    // Retrieve entered username and password
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    // Check if entered username and password match the hardcoded ones
    if (enteredUsername === username && enteredPassword === password) {
        alert("Login successful!");
        // Redirect to another page or do something else after successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
