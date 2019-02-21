'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class ProcessWithBeforeExitEvent extends AsyncObject {
  constructor (process, event) {
    super(process, event)
  }

  // event is an Event with body(exitCode)
  syncCall () {
    return (process, event) => {
      process.on('beforeExit', event)
      return process
    }
  }
}

module.exports = ProcessWithBeforeExitEvent
