document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;

    themeBtn.addEventListener("click", () => {
        // Toggle the light-mode class on the body
        body.classList.toggle("light-mode");
        
        // Update the button text depending on the active theme
        if (body.classList.contains("light-mode")) {
            themeBtn.textContent = "Dark Mode";
        } else {
            themeBtn.textContent = "Light Mode";
        }
    });
});