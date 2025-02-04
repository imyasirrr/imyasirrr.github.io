// Example JavaScript for interaction
document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.getElementById("contact");
    const contactButton = document.createElement("button");
    contactButton.textContent = "Click Me!";
    contactButton.addEventListener("click", function() {
        alert("Thank you for visiting my portfolio!");
    });
    contactSection.appendChild(contactButton);
});
