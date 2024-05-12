let progress = document.getElementById("progress")
let song = document.getElementById("audioPlayer")
let ctrlIcon = document.getElementById("ctrlIcon")
let buttonLeft = document.querySelector("[data-buttom='one']");
let buttonRight = document.querySelector("[data-buttom='two']");

song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
}

buttonLeft.addEventListener('click', (e) => {
  if(e){
      song.currentTime -= 5
  }
})
buttonRight.addEventListener('click', (e) => {
  if(e){
      song.currentTime += 5
  }
})
function playPause(){
   if(ctrlIcon.classList.contains("fa-pause")){
     song.pause();
     ctrlIcon.classList.remove("fa-pause")
     ctrlIcon.classList.add("fa-play")
   }
   else{
    song.play();
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play");
   }
}

song.ontimeupdate = function(){
  progress.value = song.currentTime;
  updateProgressBarBackground() 
}

progress.oninput = function(){
  song.currentTime = progress.value;
  updateProgressBarBackground() 
}

function updateProgressBarBackground(){
  let percentComplete = (progress.value / progress.max) * 100;
  let gradient = `linear-gradient(to right, red 0%, blue ${percentComplete}%, white ${percentComplete}%)`;
  progress.style.background = gradient;
}

progress.onchange = function(){
    song.play()
    song.currentTime = progress.value
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play")
}
