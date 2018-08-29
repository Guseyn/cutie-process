'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class ExitCode extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      console.log(process.exitCode);
      return process.exitCode;
    }
  }

}

module.exports = ExitCode;
