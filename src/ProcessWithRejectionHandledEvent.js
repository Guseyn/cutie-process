'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is process
class ProcessWithRejectionHandledEvent extends AsyncObject {

  constructor(process, event) {
    super(process, event);
  }

  // event is an Event with definedBody(p), p - promise
  definedSyncCall() {
    return (process, event) => {
      process.on('rejectionHandled', event);
      return process;
    }
  }

}

module.exports = ProcessWithRejectionHandledEvent;
