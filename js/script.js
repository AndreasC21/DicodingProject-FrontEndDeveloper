const carouselSlides = document.querySelectorAll(".testimoni-user")
let currentIndex = 0;
let interval = 2000;

function nextSlide() {
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add("active");
}

function startSlide() {
    setInterval(nextSlide, interval);
}

(function() {
    startSlide()
})()