'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ProcessWithWarningEvent
} = require('./../index');

class WarningEvent extends Event {

  constructor() {
    super();
  }

  definedBody(warning) {
    // handle
    console.log(warning);
  }

}

new DeepEqualAssertion(
  new ProcessWithWarningEvent(
    process, new WarningEvent()
  ), process
).call();
