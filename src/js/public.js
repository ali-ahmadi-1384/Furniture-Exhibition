const preloaderContainerDOM = document.querySelector(".preloader-container");
const theme = document.querySelector(":root");
const mode = document.querySelector(".mode-toggle");
let dark = false;

window.onload = () => {
    preloaderContainerDOM.style.display = "none";
}

mode.addEventListener("click", () => {
    if (!dark) {
        theme.style.setProperty("--theme-color-0", "#03001c");
        theme.style.setProperty("--theme-color-1", "#0a2647");
        theme.style.setProperty("--theme-color-2", "#ffd1e3");
        theme.style.setProperty("--theme-color-3", "#5d3587");
        theme.style.setProperty("--theme-color-4", "#2c74b3");
        theme.style.setProperty("--theme-color-5", "#ebe9f0");
        theme.style.setProperty("--theme-color-6", "#e7ebf5");
        theme.style.setProperty("--theme-color-7", "#d4adfc");
        theme.style.setProperty("--theme-color-8", "#5c469c");
        dark = true;
    } else {
        theme.style.setProperty("--theme-color-0", "#fff");
        theme.style.setProperty("--theme-color-1", "#e7ebf5");
        theme.style.setProperty("--theme-color-2", "#ead196");
        theme.style.setProperty("--theme-color-3", "#820300");
        theme.style.setProperty("--theme-color-4", "#3887be");
        theme.style.setProperty("--theme-color-5", "#38419d");
        theme.style.setProperty("--theme-color-6", "#200e3a");
        theme.style.setProperty("--theme-color-7", "#3887be");
        theme.style.setProperty("--theme-color-8", "#38419d");
        dark = false;
    }
});