// login.js

// Function to open the login page
function openLoginPage() {
    // You can replace 'login.html' with the path to your actual login page
    window.location.href = 'login.html';
}

// Event listener for the 'log in' link
document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.querySelector('.log a');

    if (loginLink) {
        loginLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Call the function to open the login page
            openLoginPage();
        });
    }
});
