
const correctUsername = "admin";
const correctPassword = "pass";


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if (username === correctUsername && password === correctPassword) {
     
        window.location.href = "o.html";
    } else {

        document.getElementById("error-message").innerText = "Invalid username or password!";
    }
});
