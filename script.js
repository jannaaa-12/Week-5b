// Run when DOM is ready (defer also ensures this, but we double-safe)
document.addEventListener('DOMContentLoaded', () => {
  const smiley = document.getElementById('smiley');
  const face   = document.querySelector('#smiley #face');

  // Guard logs (open DevTools Console on GitHub if needed)
  if (!smiley) console.error('SVG #smiley not found');
  if (!face)   console.error('Ellipse #face not found');

  const colors = ['#FCE540','#FF8C42','#FF5C8A','#8BD3E6','#7DDE92','#B49AE1'];
  let i = 0;

  function nextColor(){
    i = (i + 1) % colors.length;
    // Inline style overrides class fill from <defs>
    face.style.fill = colors[i];
    face.style.transition = 'fill .15s';
  }

  if (smiley) smiley.addEventListener('click', nextColor);

  window.addEventListener('keydown', (e)=>{
    if (e.code === 'Space'){
      e.preventDefault();
      nextColor();
    }
  });
});
