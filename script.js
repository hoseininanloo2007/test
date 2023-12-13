const background = document.querySelector('.background');

function animateBackground() {
  const scrollPosition = window.scrollY;

  // Adjust the background position based on scroll position
  background.style.backgroundPosition = `50% ${scrollPosition * 0.5}px`;

  // Continue the animation
  requestAnimationFrame(animateBackground);
}

// Call the animation function
animateBackground();

