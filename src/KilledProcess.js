'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is process
class KilledProcess extends AsyncObject {

  constructor(pid, signal) {
    super(pid, signal);
  }

  definedSyncCall() {
    return (pid, signal) => {
      if (pid) {
        process.kill(pid, signal);
      }
      return process;
    }
  }

}

module.exports = KilledProcess;
