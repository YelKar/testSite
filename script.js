window.addEventListener("keydown", e => {
    let deltaTime = 5;
    let video = document.getElementById("mediaPlayer");
    if (video) {
        switch (e.code) {
            case "ArrowLeft":
                video.currentTime -= deltaTime;
                break;
            case "ArrowRight":
                video.currentTime += deltaTime;
                break;
            case "KeyJ":
                video.currentTime -= deltaTime * video.playbackRate;
                break;
            case "KeyL":
                video.currentTime += deltaTime * video.playbackRate;
                break;
            case "KeyF":
            	let fullScreenBtn = document.getElementById("fullScreenSwitcher");
                fullScreenBtn.click();
                break;
            case "KeyK":
                toggleVideo(video);
                break;
        }
    }
});


function toggleVideo(video) {
    if (video.paused) video.play();
    else if (video.played) video.pause();
}
