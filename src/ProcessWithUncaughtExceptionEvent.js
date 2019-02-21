'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class ProcessWithUncaughtExceptionEvent extends AsyncObject {
  constructor (process, event) {
    super(process, event)
  }

  // event is an Event with body(error)
  syncCall () {
    return (process, event) => {
      process.on('uncaughtException', event)
      return process
    }
  }
}

module.exports = ProcessWithUncaughtExceptionEvent
