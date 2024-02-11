let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slider div');
  slideIndex = (n + slides.length) % slides.length;

  // Zoom in effect
  const zoomContainer = document.querySelector('.zoom-container');
  zoomContainer.style.zIndex = 2;
  setTimeout(() => {
    zoomContainer.style.opacity = 1;
  }, 50);

  setTimeout(() => {
    // Hide the zoom container after the transition
    zoomContainer.style.opacity = 0;
    zoomContainer.style.zIndex = -1;
  }, 500);

  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slides[slideIndex].style.display = 'block';
}
