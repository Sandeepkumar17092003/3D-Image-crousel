const circle = document.querySelector('.circle');
let isDragging = false;
let lastX = 0; // Store the last X position of the mouse
let currentRotation = 0; // Store the current rotation in degrees
let rotationSpeed = 0.1; // Speed of automatic rotation

// Automatically rotate the circle
function autoRotate() {
  if (!isDragging) { // Only rotate if not dragging
    currentRotation += rotationSpeed;
    circle.style.transform = `translate(-50%, -50%) rotateY(${currentRotation}deg)`;
  }
  requestAnimationFrame(autoRotate);
}

// Start automatic rotation
autoRotate();

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastX = e.pageX; // Set lastX when mouse is pressed
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.pageX - lastX; // Calculate how much the mouse moved
    currentRotation += deltaX / 5; // Adjust rotation speed (dividing by 5 slows down rotation)
    circle.style.transform = `translate(-50%, -50%) rotateY(${currentRotation}deg)`; // Rotate the circle
    lastX = e.pageX; // Update lastX for the next movement
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
