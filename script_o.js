// If user is not logged in, redirect to login page
if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}
