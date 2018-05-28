'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is process
class KilledProcess extends AsyncObject {

  constructor(pid, signal) {
    super(process, pid, signal);
  }

  definedSyncCall() {
    return (process, pid, signal) => {
      process.kill(pid, signal);
      return process;
    }
  }

}

module.exports = KilledProcess;
