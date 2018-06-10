'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
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
