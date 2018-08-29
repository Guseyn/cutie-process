'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is process
class ProcessWithEuid extends AsyncObject {

  constructor(process, id) {
    super(process, id);
  }

  definedSyncCall() {
    return (process, id) => {
      process.seteuid(id);
      return process;
    }
  }

}

module.exports = ProcessWithEuid;
