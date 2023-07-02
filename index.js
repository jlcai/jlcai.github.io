let music = document.getElementById("music");
let btn = document.getElementById("music-btn");

btn.onclick = () => {
    if (music.paused && music.currentTime > 0 && !music.ended) { music.play(); }
    else { music.pause(); }
};