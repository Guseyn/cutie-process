'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class Chdir extends AsyncObject {

  constructor(process, dir) {
    super(process, dir);
  }

  definedSyncCall() {
    return (process, dir) => {
      return process.chdir(dir);
    }
  }

}

module.exports = Chdir;
