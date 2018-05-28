'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is process
class ProcessWithEgid extends AsyncObject {

  constructor(process, id) {
    super(process, id);
  }

  definedSyncCall() {
    return (process, id) => {
      process.setegid(id);
      return process;
    }
  }

}

module.exports = ProcessWithEgid;
