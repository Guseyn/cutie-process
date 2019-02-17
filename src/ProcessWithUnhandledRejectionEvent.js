'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class ProcessWithUnhandledRejectionEvent extends AsyncObject {
  constructor (process, event) {
    super(process, event)
  }

  // event is an Event with definedBody(reason, p)
  definedSyncCall () {
    return (process, event) => {
      process.on('unhandledRejection', event)
      return process
    }
  }
}

module.exports = ProcessWithUnhandledRejectionEvent
