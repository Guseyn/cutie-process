'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is process
class ProcessWithUid extends AsyncObject {

  constructor(process, id) {
    super(process, id);
  }

  definedSyncCall() {
    return (process, id) => {
      process.setuid(id);
      return process;
    }
  }

}

module.exports = ProcessWithUid;
