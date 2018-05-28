'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is stream
class StdIn extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.stdin;
    }
  }

}

module.exports = StdIn;
