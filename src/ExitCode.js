'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class ExitCode extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.exitCode;
    }
  }

}

module.exports = ExitCode;
