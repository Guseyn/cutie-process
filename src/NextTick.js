'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is process
class NextTick extends AsyncObject {

  constructor(process, callback, ...args) {
    super(process, callback, ...args);
  }

  definedSyncCall() {
    return (process, callback, ...args) => {
      process.nextTick(callback, ...args);
      return process;
    }
  }

}

module.exports = NextTick;
