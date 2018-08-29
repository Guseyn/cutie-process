'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is process
class ProcessWithGid extends AsyncObject {

  constructor(process, id) {
    super(process, id);
  }

  definedSyncCall() {
    return (process, id) => {
      process.setgid(id);
      return process;
    }
  }

}

module.exports = ProcessWithGid;
