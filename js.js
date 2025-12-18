const advertisement = document.querySelector('.advertisement');

advertisement.addEventListener('animationend', () => {
    advertisement.style.animationPlayState = 'paused';
    advertisement.style.transform = 'translateX(0)';
    advertisement.style.animationPlayState = 'running';
});