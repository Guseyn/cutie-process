'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class ProcessWithWarningEvent extends AsyncObject {
  constructor (process, event) {
    super(process, event)
  }

  // event is an Event with body(warning)
  syncCall () {
    return (process, event) => {
      process.on('warning', event)
      return process
    }
  }
}

module.exports = ProcessWithWarningEvent
