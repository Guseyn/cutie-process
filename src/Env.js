'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class Env extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.env;
    }
  }

}

module.exports = Env;
