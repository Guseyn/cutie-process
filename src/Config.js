'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class Config extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.config;
    }
  }

}

module.exports = Config;
