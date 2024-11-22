// Check if the user is logged in
if (sessionStorage.getItem("loggedIn") !== "true") {
    // If not logged in, redirect to the login page
    window.location.href = "index.html";
}
 
