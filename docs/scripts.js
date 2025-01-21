let carouselIndex = 0;
let images;
let dots;
let modal;
let modalImages;
document.addEventListener('DOMContentLoaded', function() {
    images = document.querySelectorAll(".carousel-image");
    dots = document.querySelectorAll(".dot");
    modal = document.querySelector("#modal");
    modalImages = document.querySelectorAll(".modal-image");
    showImage(carouselIndex);
})
window.addEventListener(
    "keydown",
    (event) => {
        if(event.key == "Escape") {
            closeModal();
        }
    })
function plusCarousel(n) {
    showImage(carouselIndex + n);
}

function showImage(n) {
    let i;
    carouselIndex = n;
    if(n >= images.length) {
        carouselIndex = 0;
    }
    if (n < 0) {
        carouselIndex = images.length-1;
    }
    for(i = 0; i < images.length; i++) {
        images[i].classList.remove("active-image");
        modalImages[i].classList.remove("active-image")
        dots[i].classList.remove("active-dot")
    }
    images[carouselIndex].classList.add("active-image");
    modalImages[carouselIndex].classList.add("active-image");
    dots[carouselIndex].classList.add("active-dot");
}

function openModal() {
    modal.style.display="block";
    showImage(carouselIndex);
}
function closeModal() {
    modal.style.display="none";
}