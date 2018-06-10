'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class SentMessage extends AsyncObject {

  constructor(process, message, sendHandle, options) {
    super(process, message, sendHandle, options);
  }

  definedAsyncCall() {
    return (process, message, sendHandle, options, callback) => {
      this.message = message;
      return process.send(message, sendHandle, options, callback);
    }
  }

  onResult() {
    return this.message;
  }

}

module.exports = SentMessage;
