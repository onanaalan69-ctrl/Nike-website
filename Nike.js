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

ad.addEventListener("click", () => {
    window.location.href = "ad.html";
})
shoe.addEventListener("click", () => {
    window.location.href = "shoe.html";
})