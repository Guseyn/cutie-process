'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object | undefined
class Channel extends AsyncObject {
  constructor (process) {
    super(process)
  }

  definedSyncCall () {
    return (process) => {
      return process.channel
    }
  }
}

module.exports = Channel
