//Switсh Notes/Letters
document.querySelector('.btn-container').addEventListener('click', switchNotesLetters);

function switchNotesLetters(e) {
  if (!e.target.classList.contains('btn-active')) {
    document.querySelectorAll('.btn').forEach(elem => elem.classList.toggle('btn-active'));
    document.querySelectorAll('.piano-key').forEach(elem => elem.classList.toggle('piano-key-letter'));
  }
};

//Listener for keyboard
window.addEventListener('keydown', playNoteByKeyboard);
window.addEventListener('keyup', stopPlayByKeyboard);

function playNoteByKeyboard(e) {
  if (e.repeat) return;
  let audio = document.querySelector(`audio[data-key="${e.code}"]`);
  let key = document.querySelector(`.piano-key[data-key="${e.code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('piano-key-active', 'piano-key-active-pseudo');
};

function stopPlayByKeyboard(e) {
  let key = document.querySelector(`.piano-key[data-key="${e.code}"]`);
  if (!key) return;
  key.classList.remove('piano-key-active', 'piano-key-active-pseudo');
};

//Listeners for mouse
let isMouseDown = false;
window.addEventListener('mousedown', playNoteByMousedown, false);
window.addEventListener('mouseup', stopPlayByMousedown);
window.addEventListener('mouseover', playNoteByMouseover);
window.addEventListener('mouseout', stopPlayByMouseover);

function playNoteByMousedown(e) {
  if (!e.target.classList.contains('piano-key')) return;
  let audio = document.getElementById(e.target.dataset.letter);
  e.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
  audio.currentTime = 0;
  audio.play();
  isMouseDown = true;
};

function stopPlayByMousedown(e) {
  e.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
  e.target.removeEventListener('mouseover', playNoteByMouseover);
  isMouseDown = false;
};

function playNoteByMouseover(e) {
  if (!isMouseDown) return;
  if (!e.target.classList.contains('piano-key')) return;
  let audio = document.getElementById(e.target.dataset.letter);
  e.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
  audio.currentTime = 0;
  audio.play();
  
};

function stopPlayByMouseover(e) {
  e.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
  e.target.removeEventListener('mouseover', playNoteByMouseover);
};

//Fullscreen
document.querySelector('.fullscreen').addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  };
};