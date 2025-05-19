document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dotsNav = document.querySelector('.carousel-dots');
    const dots = Array.from(dotsNav.children);

    let currentIndex = 0;
    const cardWidth = cards[0].getBoundingClientRect().width;

    // Smooth scrolling animation
    track.style.transition = 'transform 0.4s ease-in-out';

    // Arrange the cards next to one another
    const setCardPosition = (card, index) => {
        card.style.left = cardWidth * index + 'px';
    };
    cards.forEach(setCardPosition);

    // Move to the targeted slide
    const moveToCard = (targetIndex) => {
        track.style.transform = 'translateX(-' + cardWidth * targetIndex + 'px)';
        currentIndex = targetIndex;
        updateDots(targetIndex);
    };

    // Update dots
    const updateDots = (index) => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    };

    // Loop navigation logic
    const nextSlide = () => {
        if (currentIndex === cards.length - 1) {
            track.style.transition = 'none'; // Disable transition for instant jump
            moveToCard(0);
            setTimeout(() => {
                track.style.transition = 'transform 0.4s ease-in-out';
            }, 10); // Re-enable smooth transition
        } else {
            moveToCard(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            track.style.transition = 'none';
            moveToCard(cards.length - 1);
            setTimeout(() => {
                track.style.transition = 'transform 0.4s ease-in-out';
            }, 10);
        } else {
            moveToCard(currentIndex - 1);
        }
    };

    // Handle click events for navigation
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Handle click events for dot navigation
    dotsNav.addEventListener('click', (e) => {
        const targetDot = e.target.closest('span');
        if (!targetDot) return;

        const targetIndex = dots.findIndex(dot => dot === targetDot);
        moveToCard(targetIndex);
    });

    // Auto-Slide
    setInterval(nextSlide, 5000);

    // Mobile Swipe Logic
    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            nextSlide(); // Swipe left
        } else if (startX < endX - 50) {
            prevSlide(); // Swipe right
        }
    });
});