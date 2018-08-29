'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
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
