'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is process
class AbortedProcess extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      process.abort();
      return process;
    }
  }

}

module.exports = AbortedProcess;
