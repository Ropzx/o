document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hardcoded credentials
    const correctUsername = "user123";
    const correctPassword = "mypassword";

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        // Redirect to the next page
        window.location.href = "index2.html";
    } else {
        // Show error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = "Incorrect username or password.";
    }
});
