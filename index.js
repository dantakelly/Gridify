window.addEventListener('load', function() { 
    const logoName = document.querySelector('.logo-name');
    var currentSize = parseInt(window.getComputedStyle(logoName).fontSize); // Get current font size
    var newSize = currentSize + 300; 
    logoName.style.fontSize = newSize + 'px'; 
});
