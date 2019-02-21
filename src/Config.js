'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class Config extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.config
    }
  }
}

module.exports = Config
