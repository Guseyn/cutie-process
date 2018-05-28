'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class IsConnected extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.connected;
    }
  }

}

module.exports = IsConnected;
