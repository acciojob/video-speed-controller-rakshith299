// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


const videoEle = document.getElementById("video");
const toggleEle = videoEle.querySelector(".toggle");
const playEle = document.getElementById("play");
const pauseEle = document.getElementById("pause");

const volumeEle = document.getElementById("volume");

const playbackSpeedEle = document.getElementById("playback-speed");

const skip10Ele = document.getElementById("skip-10");
const skip25Ele = document.getElementById("skip-25");

let progressEle = document.getElementById("progress");


//play
playEle.addEventListener("click", function(){
    videoEle.play();
    pauseEle.style.display = "block";
    playEle.style.display = "none";
})

//pause
pauseEle.addEventListener("click", function(){
    videoEle.pause();
    playEle.style.display = "block";
    pauseEle.style.display = "none";
})

//volume
volumeEle.addEventListener("input", function(){
    videoEle.volume = this.value;
})

//playback
playbackSpeedEle.addEventListener("input", function(){
    videoEle.playbackRate = this.value;
})

//skip 10
skip10Ele.addEventListener("click", function(){
    videoEle.currentTime = videoEle.currentTime - 10;
})

//skip 20
skip25Ele.addEventListener("click", function(){
    videoEle.currentTime = videoEle.currentTime + 25;
})

//progress
videoEle.addEventListener("timeupdate", function(){
    let per = (videoEle.currentTime / videoEle.duration) * 100;
    console.log(per);
    progressEle.style.width = per+'% ';
})





















