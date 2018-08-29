'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string[]
class Argv extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.argv;
    }
  }

}

module.exports = Argv;
