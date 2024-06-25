const progressBar = document.querySelector('.IYZ6GM');
const playButton = document.querySelector('.tC7veO');
const resetButton = document.querySelector('.UnV38X');
const timerText = document.querySelector('.JAD4ne p');
const finishTime = document.querySelector('.JAD4ne span h3');
const finishTimeSpan = document.querySelector('.JAD4ne span');
const resetButtonSVG = document.querySelector('.UnV38X svg');
let speed = 1000;
let seconds = 60;
let mousePosX;
let mousePosY;
play = true;
let progress;
const playSVG = '<svg class="svg-icon" height="24" width="24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M254.132978 880.390231c-6.079462 0-12.155854-1.511423-17.643845-4.497431-11.828396-6.482645-19.195178-18.85851-19.195178-32.341592L217.293955 180.465165c0-13.483082 7.366781-25.898857 19.195178-32.346709 11.787464-6.483668 26.226315-5.928013 37.57478 1.363044L789.797957 481.028615c10.536984 6.77531 16.908088 18.456351 16.908088 30.979572 0 12.523221-6.371104 24.203238-16.908088 30.982642L274.063913 874.53385C267.983427 878.403994 261.060761 880.390231 254.132978 880.390231L254.132978 880.390231zM254.132978 880.390231" /></svg>'
const pauseSVG = '<svg class="svg-icon" height="24" width="24" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M597.333333 816.64 768 816.64 768 219.306667 597.333333 219.306667M256 816.64 426.666667 816.64 426.666667 219.306667 256 219.306667 256 816.64Z" /></svg>'


// animating the progress bar
const animation = () => {
  seconds--;
  timerText.innerText = `00:01:${seconds}`
  if (seconds < 60) {
    timerText.innerText = `00:00:${seconds}`
  }
  if (seconds < 10) {
    timerText.innerText = `00:00:0${seconds}`
  }
  progressBar.style.background = `conic-gradient(
    #76b9ed ${seconds * 6}deg,
    #424242 ${seconds * 6}deg
    )`;
  if (seconds === 0) {
    clearInterval(progress)
    seconds = 60;
    playButton.innerHTML = playSVG;
    playButton.style.paddingRight = '0';
    resetButtonSVG.style.fill = '#757575';
    resetButton.setAttribute('disabled', '');
  } else {
    resetButtonSVG.style.fill = '#fff';
    resetButton.removeAttribute('disabled');
  }
}

// animate on press of play button
playButton.addEventListener('click', () => {
  if (play) {
    animation();
    progress = setInterval(() => {
      animation();
    }, speed);
    playButton.innerHTML = pauseSVG;
    playButton.style.paddingRight = '2px';
    finishTimeSpan.style.display = 'flex';
    play = false;
  } else {
    playButton.innerHTML = playSVG;
    playButton.style.paddingRight = '0';
    finishTimeSpan.style.display = 'none';
    clearInterval(progress);
    play = true;
  }
})

resetButton.addEventListener('click', () => {
  seconds = 60;
})