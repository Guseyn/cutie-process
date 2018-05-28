'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class Euid extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.geteuid();
    }
  }

}

module.exports = Euid;
