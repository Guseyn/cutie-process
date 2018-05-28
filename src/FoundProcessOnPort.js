'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const find = require('find-process');
const promiseToCallback = require('promise-to-callback');

// Represented result is process
class FoundProcessOnPort extends AsyncObject {

  constructor(port) {
    super(port);
  }

  definedAsyncCall() {
    return (port, callback) => {
      promiseToCallback(find('port', port))(callback);
    }
  }

  onResult(processes) {
    return processes[0];
  }

}

module.exports = FoundProcessOnPort;
