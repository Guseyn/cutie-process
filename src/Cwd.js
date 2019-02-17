'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class Cwd extends AsyncObject {
  constructor (process) {
    super(process)
  }

  definedSyncCall () {
    return (process) => {
      return process.cwd()
    }
  }
}

module.exports = Cwd
