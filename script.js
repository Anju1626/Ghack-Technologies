// Carousel scrolling (drag-to-scroll)
const carousel = document.querySelector('.carousel');
let isDown = false;
let startX, scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Scroll faster
    carousel.scrollLeft = scrollLeft - walk;
});

// Lazy loading optimization
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});
