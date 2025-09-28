// Grab the face ellipse (the part we recolor)
const face = document.getElementById('face');
const smiley = document.getElementById('smiley');

// Guard check
if (!face || !smiley) {
  console.error('SVG elements not found. Check that #face and #smiley IDs exist.');
}

// Color palette to cycle through
const colors = [
  '#FCE540', // yellow
  '#FF8C42', // orange
  '#FF5C8A', // pink
  '#8BD3E6', // light blue
  '#7DDE92', // green
  '#B49AE1'  // lavender
];
let i = 0;

// Change color function (inline style beats class fill)
function nextColor() {
  i = (i + 1) % colors.length;
  face.style.fill = colors[i];
  face.style.transition = 'fill .15s';
}

// Click anywhere on the SVG to change color
if (smiley) {
  smiley.addEventListener('click', nextColor);
}

// Keyboard accessibility: Spacebar cycles the color
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    nextColor();
  }
});
