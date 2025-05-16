const exploreButton = document.getElementById('exploreButton');
const navItems = document.getElementById('navItems');
let isOpen = false;

exploreButton.addEventListener('click', () => {
    isOpen = !isOpen;
    navItems.style.display = isOpen ? 'flex' : 'none';

    // Blur effect for the background
    document.body.style.filter = isOpen ? 'blur(2px)' : 'none';
    navItems.style.filter = 'none'; // Keep navItems clear

    // Align horizontally
    if (isOpen) {
        navItems.style.justifyContent = 'center';
        navItems.style.gap = '20px';
    }
});




/* Initialize Particles.js */
particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('Particles.js configuration loaded successfully.');
});


document.querySelector('.scroll-indicator').addEventListener('click', function () {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});



document.querySelector('.btn-primary').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-secondary').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
