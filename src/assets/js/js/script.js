// Wrap the loader code in a DOMContentLoaded event listener to ensure DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader when page is loaded
  window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    // Only try to modify classList if loader exists
    if (loader) {
      loader.classList.add('loader--hidden');
    }
  });
});