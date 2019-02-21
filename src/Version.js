'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class Version extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.version
    }
  }
}

module.exports = Version
