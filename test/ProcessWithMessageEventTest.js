'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
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
