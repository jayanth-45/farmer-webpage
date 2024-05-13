document.getElementById("logout-btn").addEventListener("click", function() {
    // Redirect the user to another webpage
    window.location.href = "abc.html"; // Change "logout.html" to the URL of the logout page
});
document.addEventListener("DOMContentLoaded", function() {
    var monthsList = document.getElementById("months-list");
    var toggleButton = document.getElementById("toggle-months");
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Populate months list
    var monthsHTML = "";
    months.forEach(function(month) {
        monthsHTML += "<li><a href='" + month.toLowerCase() + ".html'>" + month + "</a></li>";
    });
    monthsList.innerHTML = monthsHTML;
    
    // Toggle visibility of months list when button is clicked
    toggleButton.addEventListener("click", function() {
        var monthsDisplay = window.getComputedStyle(monthsList).getPropertyValue("display");
        if (monthsDisplay === "none") {
            monthsList.style.display = "block";
            toggleButton.textContent = "Hide Months";
        } else {
            monthsList.style.display = "none";
            toggleButton.textContent = "Show Months";
        }
    });
});
