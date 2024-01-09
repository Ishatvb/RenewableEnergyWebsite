// JavaScript for Image Slider
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");

    let currentIndex = 0;

    function showSlide(index) {
        const translateValue = -index * 100 + "%";
        slider.style.transform = "translateX(" + translateValue + ")";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
