'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is stream
class StdOut extends AsyncObject {
  constructor (process) {
    super(process)
  }

  definedSyncCall () {
    return (process) => {
      return process.stdout
    }
  }
}

module.exports = StdOut
