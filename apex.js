document.addEventListener("DOMContentLoaded", function() {
    const whatsappButton = document.getElementById("startLearningBtn");

    whatsappButton.addEventListener("click", function() {
        window.location.href = "https://wa.me/96178984905?text=I'm%20interested%20in%20learning%20with%20Apex.%20Can%20you%20give%20me%20more%20details?";
    });
});
