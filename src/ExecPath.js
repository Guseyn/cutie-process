'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class ExecPath extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.execPath;
    }
  }

}

module.exports = ExecPath;
