class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {     
      if (this.currentMilliseconds === 99) {
        this.currentTime += 1;
        this.currentMilliseconds = 0;
      }
      if (callback) {
        callback();
      }
      this.currentMilliseconds += 1;
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60000)
  }

  getSeconds() {
    return this.currentTime % 1000
  }

  getMilliSeconds() {
    return this.currentMilliseconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return '0' + value;
    return '' + value
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let milliseconds = this.computeTwoDigitNumber(this.getMilliSeconds())
    return `${minutes}:${seconds}:${milliseconds}`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
