const heart = document.querySelector('.buy a');

const rect = heart.getBoundingClientRect();
const heartX = rect.left + rect.width / 2;
const heartY = rect.top + rect.height / 2;

window.addEventListener('resize', () => {
    rect = heart.getBoundingClientRect();
    heartX = rect.left + rect.width / 2;
    heartY = rect.top + rect.height / 2;
});


document.addEventListener('mousemove', (e) => {
    const distanceX = e.clientX - heartX;
    const distanceY = e.clientY - heartY;

    const distance = Math.sqrt(distanceX *distanceX + distanceY *distanceY);
    const range = 800;

    if (distance < range) {
        heart.style.transform = 'none';
        heart.style.transform = `translate(${distanceX * 0.4}px, ${distanceY * 0.4}px)`;
    }
    else {
        heart.style.transform = 'translate(0px, 0px';
    }
})