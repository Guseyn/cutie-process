'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class Title extends AsyncObject {

  constructor(process) {
    super(process);
  }

  definedSyncCall() {
    return (process) => {
      return process.title;
    }
  }

}

module.exports = Title;
