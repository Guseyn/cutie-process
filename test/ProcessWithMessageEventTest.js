'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ProcessWithMessageEvent
} = require('./../index');

class MessageEvent extends Event {

  constructor() {
    super();
  }

  definedBody(message) {
    // handle
  }

}

new DeepEqualAssertion(
  new ProcessWithMessageEvent(process, new MessageEvent()), process
).call();
