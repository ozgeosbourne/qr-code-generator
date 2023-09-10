// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and QR code div
    const form = document.getElementById("qr-form");
    const qrCodeDiv = document.getElementById("qr-code");

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input
        const userInput = document.getElementById("text-input").value;

        // Generate QR code
        const qr = new QRCode(qrCodeDiv, {
            text: userInput,
            width: 128,
            height: 128
        });
    });
});
