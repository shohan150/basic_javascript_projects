let progress = document.getElementById('progress');
let song = document.getElementById('song');
let controlIcon = document.getElementById('ctrl');

song.onloadeddata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (controlIcon.classList.contains('fa-pause')) {
        song.pause();
        controlIcon.classList.remove('fa-pause');
        controlIcon.classList.add('fa-play');
        console.log(controlIcon.classList);

    } else {
        song.play();
        controlIcon.classList.remove('fa-play');
        controlIcon.classList.add('fa-pause');
        console.log(controlIcon.classList);
    }

}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
};

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.remove('fa-play');
    controlIcon.classList.add('fa-pause');
}