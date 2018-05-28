
'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class KilledProcessOnPort extends AsyncObject {

  constructor(port, process) {
    super(port, process);
  }

  definedSyncCall() {
    return (port, process) => {
      process.kill(process.pid, 'SIGHUP');
      return process;
    }
  }

}

module.exports = KilledProcessOnPort;
