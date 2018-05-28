'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class Version extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.version;
    }
  }

}

module.exports = Version;
