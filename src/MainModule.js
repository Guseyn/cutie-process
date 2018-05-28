'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is module
class MainModule extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.mainModule;
    }
  }

}

module.exports = MainModule;
