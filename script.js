document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image');
  
    const originalSrc = 'darwin.jpg';
    const hoverSrc = 'r9.jpg';
  
    image.addEventListener('mouseover', function() {
      image.src = hoverSrc;
    });
  
    image.addEventListener('mouseout', function() {
      image.src = originalSrc;
    });
  });
  