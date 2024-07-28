document.addEventListener('DOMContentLoaded', () => {
    // Example animation on About Me section
    const aboutSection = document.getElementById('about');
    aboutSection.style.opacity = 0;
    aboutSection.style.transition = 'opacity 2s, transform 2s';
    setTimeout(() => {
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = 'translateZ(50px)';
    }, 500);
});
