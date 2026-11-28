//Select DOM elements
const form = document.querySelector(".contact-form");
const confirmationBox = document.getElementById("confirmation-box");
const confirmationText = document.getElementById("confirmation-text");
const backButton = document.getElementById("back-to-form");
const nameInput = document.getElementById("name");

//Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default page reload

    const userName = nameInput.value; // value to access the content of the field
    confirmationText.textContent =
    "Thank you, " + userName + ". Nothing is saved or sent anywhere: this message is only displayed dynamically using JavaScript for this demo.";

    // Hide the form and show the confirmation box
    form.classList.add("is-hidden");
    confirmationBox.classList.remove("is-hidden");
});

// Return to the empty form when clicking the back button
backButton.addEventListener("click", function () {
    confirmationBox.classList.add("is-hidden");
    form.classList.remove("is-hidden");
    form.reset();
});