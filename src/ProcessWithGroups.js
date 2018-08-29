'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is process
class ProcessWithGroups extends AsyncObject {

  constructor(process, groups) {
    super(process, groups);
  }

  definedSyncCall() {
    return (process, groups) => {
      process.setgroups(groups);
      return process;
    }
  }

}

module.exports = ProcessWithGroups;
