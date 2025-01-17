// Select the navbar element
const navbar = document.getElementById('navigation');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'white';
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '1000';

        // Change the links to black
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.style.color = 'black';
        });
    } else {
        // Reset the styles when scrolled to the top
        navbar.style.backgroundColor = 'transparent';
        navbar.style.position = 'static';

        // Change the links back to their original color
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.style.color = '#898989';
        });
    }
});
