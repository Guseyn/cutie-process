'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class Uid extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.getuid();
    }
  }

}

module.exports = Uid;
