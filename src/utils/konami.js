// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  var toastyDogDiv = document.createElement('img');
  toastyDogDiv.src = './src/img/about-me/cool-dog.JPG';
  toastyDogDiv.style.objectFit = 'cover';
  toastyDogDiv.style.zIndex = 99;
  toastyDogDiv.style.position = 'absolute';
  toastyDogDiv.style.top = 0;
  toastyDogDiv.style.left = 0;
  toastyDogDiv.style.height = '100vh';
  toastyDogDiv.style.width = '100vw';

  document.body.appendChild(toastyDogDiv);

  var audio = new Audio('./src/docs/8d82b5_Mortal_Kombat_3_Toasty_Sound_Effect.mp3');
  audio.play();

  setTimeout(() => { document.body.removeChild(toastyDogDiv); }, 1000);
}