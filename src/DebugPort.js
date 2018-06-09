'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class DebugPort extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.debugPort;
    }
  }

}

module.exports = DebugPort;
