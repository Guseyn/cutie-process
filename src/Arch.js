'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class Arch extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.arch
    }
  }
}

module.exports = Arch
