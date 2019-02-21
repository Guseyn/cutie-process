'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is module
class MainModule extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.mainModule
    }
  }
}

module.exports = MainModule
