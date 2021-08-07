//import displayTime from "./timeDisplay";
import playMedia from "./playMedia.js";

function app () {
    const track = document.querySelector(".track");
    const video = document.querySelector(".video-container video");
    const playBtn = document.querySelector(".play-btn");

    //const time = document.querySelector(".time");
    //const player = document.querySelector(".player");
    //const settings = document.querySelector(".settings");

    //SVG circle
    const outline = document.querySelector(".moving-outline circle");
    const outlineLength = outline.getTotalLength();

    //Time Display
    const timeDisplay = document.querySelector(".time-display");
    let timer = 600;

    outline.style.strokeDasharray = outlineLength - 200;





    //READY
    //Play Functionality
    playBtn.addEventListener("click", () =>{
        playMedia(track, video);
    });
}

app();