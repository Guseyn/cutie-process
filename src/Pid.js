'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Pid extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.pid
    }
  }
}

module.exports = Pid
