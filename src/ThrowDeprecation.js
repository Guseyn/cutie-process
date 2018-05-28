'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class ThrowDeprecation extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.throwDeprecation;
    }
  }

}

module.exports = ThrowDeprecation;
