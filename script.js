let progress = document.getElementById("progress")
let song = document.getElementById("audioPlayer")
let ctrlIcon = document.getElementById("ctrlIcon")
let buttonLeft = document.querySelector("[data-buttom='one']");
let buttonRight = document.querySelector("[data-buttom='two']");
let musicName = document.getElementById("musicName")
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

let test = Array.from(document.querySelector('[data-musicList="musics"]').children)

let playlistMusic = [
  {img: 'public/img/Luffy.jpg', name: "One Piece: WE ARE!", music: `./musics/OnePiece.mp3`},
  {img: 'public/img/Ichigo.jpg',name: "Bleach Temp 2: SAIHATE", music: `./musics/Saihate.mp3`},
  {img: 'public/img/Gojo.jpg', name: "Jujutsu Kaisen: KAIKAIKITAN", music: `./musics/KAIKAIKITAN.mp3`},
  {img: 'public/img/Gojo.jpg', name: "Jujutsu Kaisen: SPECIALZ", music: `./musics/SPECIALZ.mp3`},
  {img: 'public/img/Guts.jpg', name: "Guts Theme", music: `./musics/GUTS-THEME.mp3`}
]
let playlistMusicName = [
  "One Piece: WE ARE!",
  "Bleach Temp 2: SAIHATE",
  "Jujutsu Kaisen: KAIKAIKITAN",
  "Jujutsu Kaisen: SPECIALZ",
  "Guts Theme"
]
test.forEach((item,count) => {
    if(count < playlistMusic.length){
      item.innerText = playlistMusic[count].name
    }
})

let albumPhoto2 = document.getElementById('secondPhoto')
let albumPhoto1 = document.getElementById('firstPhoto')
test.forEach((item) => {
  item.addEventListener("click", (e) => {
    let musicCliked = playlistMusicName.indexOf(e.target.innerText)
    song.setAttribute("src", playlistMusic[musicCliked].music)
    musicName.innerText = playlistMusicName[musicCliked]
    console.log(albumPhoto1,albumPhoto2);
    albumPhoto1.setAttribute('src', playlistMusic[musicCliked].img)
    albumPhoto2.setAttribute('src', playlistMusic[musicCliked].img)
    song.play()
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  })
})
let playlist = document.getElementsByClassName("playlist")[0]
let playlistButton = document.getElementById("callPlaylist")
let initEvent = true
playlistButton.addEventListener("click", (e) => {
    if(initEvent){
      playlist.style.animation = "goRight 1s forwards"
      playlistButton.style.animation = "goLeftButton 1s forwards"
      initEvent = false
    }else{
      playlist.style.animation = "goLeft 1s forwards"
      playlistButton.style.animation = "goRightButton 1s forwards"
      initEvent = true
    }
    console.log(initEvent);
})