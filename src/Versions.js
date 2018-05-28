'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class Versions extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.versions;
    }
  }

}

module.exports = Versions;
