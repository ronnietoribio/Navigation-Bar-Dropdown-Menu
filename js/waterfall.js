const index = document.querySelector('.waterfall');

// Create multiple wave elements
for (let i = 0; i < 5; i++) { // Adjust number of waves
  const wave = document.createElement('div');
  wave.classList.add('wave');
  wave.style.bottom = `${i * 100}px`; // Adjust wave spacing
  waterfall.appendChild(wave);
}