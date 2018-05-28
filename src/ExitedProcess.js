'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is process
class ExitedProcess extends AsyncObject {

  constructor(process, code) {
    super(process, code);
  }

  definedSyncCall() {
    return (process, code) => {
      process.exit(code);
      return process;
    }
  }

}

module.exports = ExitedProcess;
