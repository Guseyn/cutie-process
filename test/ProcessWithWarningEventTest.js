'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ProcessWithWarningEvent
} = require('./../index');

class WarningEvent extends Event {

  constructor() {
    super();
  }

  definedBody(warning) {
    // handle
  }

}

new DeepEqualAssertion(
  new ProcessWithWarningEvent(
    process, new WarningEvent()
  ), process
).call();
