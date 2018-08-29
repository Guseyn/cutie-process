'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is process
class ProcessWithEmitedWarning extends AsyncObject {

  constructor(process, warning, options) {
    super(process, warning, options);
  }

  definedSyncCall() {
    return (process, warning, options) => {
      process.emitWarning(warning, options);
      return process;
    }
  }

}

module.exports = ProcessWithEmitedWarning;
