const musicOn = document.querySelectorAll('.album-btn');
const controlMusic = document.querySelectorAll('.album-btn .fas');

musicOn.forEach(comeOn =>{
  comeOn.addEventListener('click', e=> musicToggle(comeOn, e))
})

function musicToggle(comeOn, e) {
  const musicAudio = document.getElementById(comeOn.dataset.music);
 
  let playPause = e.target
  console.log(e)
    if (playPause.classList.contains('fa-play-circle')){
     
      musicAudio.play(playPause);
      playPause.classList.remove('fa-play-circle');
      playPause.classList.add('fa-pause-circle');
      playPause.style.color = "#fff";
    } else {
      
      musicAudio.pause(playPause);
      playPause.classList.remove('fa-pause-circle');
      playPause.classList.add('fa-play-circle');
    } 

}






