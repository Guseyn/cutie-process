'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class Platform extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.platform
    }
  }
}

module.exports = Platform
