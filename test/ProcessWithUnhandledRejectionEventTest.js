'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ProcessWithUnhandledRejectionEvent
} = require('./../index');

class UnhandledRejectionEvent extends Event {

  constructor() {
    super();
  }

  definedBody(reason, p) {
    // handle
  }

}

new DeepEqualAssertion(
  new ProcessWithUnhandledRejectionEvent(
    process, new UnhandledRejectionEvent()
  ), process
).call();
