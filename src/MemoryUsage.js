'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class MemoryUsage extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.memoryUsage();
    }
  }

}

module.exports = MemoryUsage;
