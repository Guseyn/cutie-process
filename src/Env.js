'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class Env extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.env
    }
  }
}

module.exports = Env
