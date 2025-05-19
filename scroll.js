
// ========================== SMOOTH SCROLLING LOGIC ==========================
document.querySelectorAll('#desktopNav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



// ========================== ACTIVE LINK HIGHLIGHT ==========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#desktopNav a');

window.addEventListener('scroll', () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});
