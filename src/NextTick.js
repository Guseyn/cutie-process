'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class NextTick extends AsyncObject {
  constructor (process, callback, ...args) {
    super(process, callback, ...args)
  }

  syncCall () {
    return (process, callback, ...args) => {
      process.nextTick(callback, ...args)
      return process
    }
  }
}

module.exports = NextTick
