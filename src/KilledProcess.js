'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process as pid
class KilledProcess extends AsyncObject {
  constructor (pid, signal) {
    super(pid, signal)
  }

  syncCall () {
    return (pid, signal) => {
      if (pid) {
        process.kill(pid, signal)
      }
      return pid
    }
  }
}

module.exports = KilledProcess
