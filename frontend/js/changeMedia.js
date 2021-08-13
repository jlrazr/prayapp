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

export default changeMedia;