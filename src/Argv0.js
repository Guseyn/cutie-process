'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class Argv0 extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.argv0;
    }
  }

}

module.exports = Argv0;
