'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class DisconnectedProcess extends AsyncObject {
  constructor (process) {
    super(process)
  }

  definedSyncCall () {
    return (process) => {
      process.disconnect()
      return process
    }
  }
}

module.exports = DisconnectedProcess
