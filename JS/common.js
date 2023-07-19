const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
let currentSlide = 0;

function showSlide() {
    const slides = document.querySelectorAll(".slider img");
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

function showNextSlide() {
    console.log("Clicked");
    currentSlide = (currentSlide + 1) % slider.children.length;
    showSlide();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
    showSlide();
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

showSlide();