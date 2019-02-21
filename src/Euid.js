'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Euid extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.geteuid()
    }
  }
}

module.exports = Euid
