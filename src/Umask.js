'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class Umask extends AsyncObject {

  constructor(process, mask) {
    super(process, mask);
  }

  definedSyncCall() {
    return (process, mask) => {
      return process.umask(mask);
    }
  }

}

module.exports = Umask;
