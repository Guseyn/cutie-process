'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ProcessWithUncaughtExceptionEvent
} = require('./../index');

class UncaughtExceptionEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {
    // handle
  }

}

new DeepEqualAssertion(
  new ProcessWithUncaughtExceptionEvent(
    process, new UncaughtExceptionEvent()
  ), process
).call();
