'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ProcessWithRejectionHandledEvent
} = require('./../index');

class RejectionHandledEvent extends Event {

  constructor() {
    super();
  }

  definedBody(p) {
    // handle
  }

}

new DeepEqualAssertion(
  new ProcessWithRejectionHandledEvent(process, new RejectionHandledEvent()), process
).call();
