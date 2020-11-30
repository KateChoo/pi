const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const indicator = document.querySelectorAll('.pianoKeys li')
const keys = document.querySelectorAll('.key')
// const fkeys = document.querySelectorAll('.fkey')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const allKeys = document.querySelectorAll('.pianoKeys li')
/*=====================================================================================*/ 
const whiteKall = document.querySelectorAll('.white')
const blackKall = document.querySelectorAll('.black')
const curtainNav = document.querySelector('.curtainNav')
/*=====================================================================================*/ 
const banner = document.querySelector('.pillar')
/*=====================================================================================*/ 

// indicator.forEach(indi => {     //如果沒有跑回圈就會顯示not a function
//   indi.addEventListener('mouseover', function(e) {
//     let indi = e;
//     console.log(indi);
   
//   })
// })
/*=====================================================================================*/

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})


document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

/*=====================================================================================*/ 

blackKall.forEach(black => {
  black.addEventListener('click', menuToggle)
})

function menuToggle(){
  curtainNav.classList.toggle('active');
}


/*=====================================================================================*/ 

let bannerImgs = [
  'url(https://miro.medium.com/max/1800/1*bsxrX3ZkcyEpZNqbRP7uuw.jpeg)',
  'url(https://assets.classicfm.com/2013/39/the-most-iconic-images-ever-martha-argerich-with-claudio-abbado-1380811300-view-1.jpg)',
  'url(https://assets.classicfm.com/2012/31/verbier-festival-2012-argerich-1343993458-view-1.jpg)',
  'url(https://api.culture.pl/sites/default/files/images/imported/muzyka/portrety%20i%20instytucje/zimerman%20krystian%20portret/krystian_zimermanen_a.jpg)',
  'url(https://pbs.twimg.com/media/Dg2bx_AWsAATTA0.jpg)'
]

whiteKall.forEach(white => {
  white.addEventListener('click', info)
})

function info(){
  let randomIndex = Math.floor(Math.random()*bannerImgs.length);
  banner.style.backgroundImage = bannerImgs[randomIndex];
}






  