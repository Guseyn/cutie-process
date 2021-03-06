'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class ProcessWithSignalEvent extends AsyncObject {
  constructor (process, signal, event) {
    super(process, signal, event)
  }

  // event is an Event with body()
  syncCall () {
    return (process, signal, event) => {
      process.on(signal, event)
      return process
    }
  }
}

module.exports = ProcessWithSignalEvent
