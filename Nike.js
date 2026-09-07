const themeList = ['whitebg', 'blackbg'];
const magicSwoosh = document.querySelector("#magicSwoosh");

magicSwoosh.style.cursor = "pointer";
magicSwoosh.addEventListener("click", () => {
    const themeOn = document.body.getAttribute('data-theme');
    const themeOff = themeList.filter(theme => theme !== themeOn);

    document.body.setAttribute('data-theme', themeOff);
});

const ad = document.querySelector("#ad");
const shoe = document.querySelector("#shoe");
const sports = document.querySelector("#sports");
const genesis = document.querySelector("#genesis");

ad.addEventListener("click", () => {
    window.location.href = "ad.html";
})
shoe.addEventListener("click", () => {
    window.location.href = "shoe.html";
})
sports.addEventListener("click", () =>{
    window.location.href = "sports.html"
})
genesis.addEventListener("click", () =>{
    window.location.href = "genesis.html"
})

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
    const range = 80;

    if (distance < range) {
        heart.style.transform = 'none';
        heart.style.transform = `translate(${distanceX * 0.4}px, ${distanceY * 0.4}px)`;
    }
    else {
        heart.style.transform = 'translate(0px, 0px';
    }
})