'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
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
