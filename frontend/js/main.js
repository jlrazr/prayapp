//import displayTime from "./timeDisplay";
import playMedia from "./playMedia.js";




function app () {
    const playBtn = document.querySelector(".play-btn");
    const trackBtn = document.querySelectorAll(".sound-picker button");
    const track = document.querySelector(".track");
    const video = document.querySelector(".video-container video");


    //Play Functionality
    playBtn.addEventListener("click", () => {
        playMedia(track, video);
    });

    function changeMedia(element) {
        element.addEventListener("click", function(){
            let newTrack = element.dataset.sound;
            let newVideo = element.dataset.video;

            track.setAttribute("src", newTrack);
            video.setAttribute("src", newVideo);
            console.log(track);
            console.log(video);

            playMedia(track, video);
        });
    }

    trackBtn.forEach(changeMedia);
}

app();