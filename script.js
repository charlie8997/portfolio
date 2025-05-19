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

