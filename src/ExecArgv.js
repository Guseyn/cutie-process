'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class ExecArgv extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.execArgv;
    }
  }

}

module.exports = ExecArgv;
