'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class Release extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.release
    }
  }
}

module.exports = Release
