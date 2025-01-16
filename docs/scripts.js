let carouselIndex = 0;
let images;
document.addEventListener('DOMContentLoaded', function() {
    images = document.querySelectorAll(".carousel-image");
    showImage(carouselIndex);
})

function plusCarousel(n) {
    showImage(carouselIndex + n);
}

function showImage(n) {
    let i;
    console.log(images.length);
    carouselIndex = n;
    if(n >= images.length) {
        carouselIndex = 0;
    }
    if (n < 0) {
        carouselIndex = images.length-1;
    }
    for(i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }
    images[carouselIndex].classList.add("active");
}