'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
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
