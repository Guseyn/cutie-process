'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is process
class ProcessWithBeforeExitEvent extends AsyncObject {

  constructor(process, event) {
    super(process, event);
  }

  // event is an Event with definedBody(exitCode)
  definedSyncCall() {
    return (process, event) => {
      process.on('beforeExit', event);
      return process;
    }
  }

}

module.exports = ProcessWithBeforeExitEvent;
