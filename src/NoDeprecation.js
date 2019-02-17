'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class NoDeprecation extends AsyncObject {
  constructor (process) {
    super(process)
  }

  definedSyncCall () {
    return (process) => {
      return process.noDeprecation
    }
  }
}

module.exports = NoDeprecation
