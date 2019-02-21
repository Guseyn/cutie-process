'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class ProcessWithMessageEvent extends AsyncObject {
  constructor (process, event) {
    super(process, event)
  }

  // event is an Event with body(message, sendHandle)
  syncCall () {
    return (process, event) => {
      process.on('message', event)
      return process
    }
  }
}

module.exports = ProcessWithMessageEvent
