'use strict';

const AsyncObject = require('@cuties/cutie').AsyncObject;
const find = require('find-process');
const promiseToCallback = require('promise-to-callback');

const notDefinedProcess = {};

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
    return (processes == null || processes.length === 0) ? notDefinedProcess : processes[0];
  }

}

module.exports = FoundProcessOnPort;
