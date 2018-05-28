'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is void
class SentMessage extends AsyncObject {

  constructor(process, message, sendHandle, options) {
    super(process, message, sendHandle, options);
  }

  definedAsyncCall() {
    return (process, message, sendHandle, options, callback) => {
      return process.sendMessage(message, sendHandle, options, callback);
    }
  }

}

module.exports = SentMessage;
