'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ProcessWithSignalEvent
} = require('./../index');

class SignalEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {
    // handle
  }

}

new DeepEqualAssertion(
  new ProcessWithSignalEvent(process, 'SIGHUP', new SignalEvent()), process
).call();
