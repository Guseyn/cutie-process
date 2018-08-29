'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class Ppid extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.ppid;
    }
  }

}

module.exports = Ppid;
