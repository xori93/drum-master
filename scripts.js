const switches = document.querySelectorAll('.switch');

// Create an audio object for the hover sound
const hoverSound = new Audio('assets/hover.wav');

// Select the drum pad with ID 'pad-7'
const pad7 = document.getElementById("pad-7");

const pad8 = document.getElementById("pad-8");
const pad8Sound = new Audio("assets/mixkit-atmospheric-wind-drum-roll-swoosh-576.wav");

const pad9 = document.getElementById("pad-9");
const pad9sound = new Audio("assets/mixkit-fail-drum-and-xylophone-568.wav");

const pad4 = document.getElementById("pad-4");
const pad5 = document.getElementById("pad-5");
const pad6 = document.getElementById("pad-6");
const pad1 = document.getElementById("pad-1");
const pad2 = document.getElementById("pad-2");
const pad3 = document.getElementById("pad-3");

// Add an event listener for the 'mouseover' event on pad-8
switches.forEach((item) => {
  item.addEventListener('mouseover', () => {
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play();
  })
});


// Add an event listener for the 'click' event on pad-7
pad7.addEventListener('click', () => {
  const clickSound = new Audio('assets/mixkit-drum-roll-566.wav');
  console.log('Pad 7 clicked');
  clickSound.currentTime = 0; // Reset sound to start
  clickSound.play();
})


document.addEventListener('keyup', (event) => {
  if (event.key === "8") {
    console.log('key "8" pressed')
    pad8Sound.currentTime = 0; // Reset sound to start
    pad8Sound.play();
  }
});


document.addEventListener('keydown', (event) => {
  if (event.key === "9") {
    pad9sound.currentTime = 0;
    pad9sound.play();
  }
});

pad4.addEventListener('click', () => {
  const pad4Sound = new Audio('assets/mixkit-cool-impact-movie-trailer-2909.wav');
  console.log('Pad 4 clicked');
  pad4Sound.currentTime = 0; // Reset sound to start
  pad4Sound.play();
});

pad5.addEventListener('click', () => {
  const pad5Sound = new Audio('assets/mixkit-drumming-jungle-music-2426.wav');
  console.log('Pad 5 clicked');
  pad5Sound.currentTime = 0; // Reset sound to start
  pad5Sound.play();
})

pad6.addEventListener('click', () => {
  const pad6Sound = new Audio('assets/mixkit-horror-deep-drum-heartbeat-559.wav');
  pad6Sound.currentTime = 0;
  pad6Sound.play();
});

pad1.addEventListener('click', () => {
  const pad1Sound = new Audio('assets/mixkit-joke-drums-578 (1).wav');
  pad1Sound.currentTime = 0;
  pad1Sound.play();
});

pad2.addEventListener('click', () => {
  const pad2Sound = new Audio('assets/mixkit-pulsating-bass-transition-2295.wav');
  pad2Sound.currentTime = 0;
  pad2Sound.play();
});

pad3.addEventListener('mouseover', () => {
  const pad3Sound = new Audio('assets/hover.wav');
  pad3Sound.currentTime = 0;
  pad3Sound.play();
});