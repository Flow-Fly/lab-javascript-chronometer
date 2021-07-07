const chronometer = new Chronometer();

// get the buttons:
//START STOP
const btnLeftElement = document.getElementById('btnLeft');
//RESET SPLIT
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId = null

function printTime() {
  intervalId = setInterval(() => {
    printMinutes()
    printSeconds()
    printMilliseconds()

  }, 10)
  return intervalId
}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  let dec = Math.floor(minutes / 10)
  let uni = minutes % 10
  minDecElement.textContent = dec;
  minUniElement.textContent = uni;
}

function printSeconds() {
  let seconds = chronometer.getSeconds()
  let dec = Math.floor(seconds / 10)
  let uni = seconds % 10
  secDecElement.textContent = dec;
  secUniElement.textContent = uni;
}

// ==> BONUS
function printMilliseconds() {
  let milliSeconds = chronometer.getMilliSeconds()
  console.log(milliSeconds)
  let dec = Math.floor(milliSeconds / 10)
  let uni = milliSeconds % 10
  milDecElement.textContent = dec;
  milUniElement.textContent = uni;
}

function printSplit() {
  const time = chronometer.split()
  const newSplit = document.createElement('li')
  newSplit.textContent = time;
  splitsElement.appendChild(newSplit)
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.classList.toggle('start')
  btnLeftElement.textContent = 'STOP'
  btnLeftElement.classList.toggle('stop')
}

function setSplitBtn() {
  btnRightElement.classList.toggle('reset')
  btnRightElement.textContent = 'SPLIT'
  btnRightElement.classList.toggle('split')
}

function setStartBtn() {
  btnLeftElement.classList.toggle('start')
  btnLeftElement.textContent = 'START'
  btnLeftElement.classList.toggle('stop')
}

function setResetBtn() {
  btnRightElement.classList.toggle('reset')
  btnRightElement.textContent = 'RESET'
  btnRightElement.classList.toggle('split')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.start()
    printTime()
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stop()
    clearInterval(intervalId)
  } 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit()
  } else {
    clearSplits()
    chronometer.reset()
    //printTime need to be recalled to print the new 00:00:00 values
    printTime()
    
    
  }
});
