const themeList = ['white_theme', 'black_theme'];
const magicSwoosh = document.querySelector("#magicSwoosh");

magicSwoosh.style.cursor = "pointer";
magicSwoosh.addEventListener("click", () => {
    const themeOn = document.body.getAttribute('data-theme');
    const themeOff = themeList.filter(theme => theme !== themeOn);

    document.body.setAttribute('data-theme', themeOff);
});