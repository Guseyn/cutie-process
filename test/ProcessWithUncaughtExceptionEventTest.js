'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
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
