'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class Chdir extends AsyncObject {

  constructor(process, dir) {
    super(process, dir);
  }

  definedSyncCall() {
    return (process, dir) => {
      process.chdir(dir);
      return dir;
    }
  }

}

module.exports = Chdir;
