const playBtn = document.querySelector(".play-btn");

const playMedia = (track, video) => {
    if (track.paused) {
        track.play();
        video.play();
        playBtn.src = "./img/pause.svg";
        
    } else {
        video.pause();
        track.pause();
        playBtn.src = "./img/play.svg";
    }
}

export default playMedia;