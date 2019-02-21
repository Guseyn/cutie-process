'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class DebugPort extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.debugPort
    }
  }
}

module.exports = DebugPort
