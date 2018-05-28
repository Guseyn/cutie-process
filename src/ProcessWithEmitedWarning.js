'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is process
class ProcessWithEmitedWarning extends AsyncObject {

  constructor(process, warning, options) {
    super(process, warning, options);
  }

  definedSyncCall() {
    return (process, warning, options) => {
      return process.emitWarning(warning, options);
    }
  }

}

module.exports = ProcessWithEmitedWarning;
