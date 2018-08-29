'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
