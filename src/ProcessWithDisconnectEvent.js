'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class ProcessWithDisconnectEvent extends AsyncObject {
  constructor (process, event) {
    super(process, event)
  }

  // event is an Event with body()
  syncCall () {
    return (process, event) => {
      process.on('disconnect', event)
      return process
    }
  }
}

module.exports = ProcessWithDisconnectEvent
