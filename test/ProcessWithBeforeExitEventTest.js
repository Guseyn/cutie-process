'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ProcessWithBeforeExitEvent
} = require('./../index');

class BeforeExitEvent extends Event {

  constructor() {
    super();
  }

  definedBody(exitCode) {
    // handle
  }

}

new DeepEqualAssertion(
  new ProcessWithBeforeExitEvent(process, new BeforeExitEvent()), process
).call();
