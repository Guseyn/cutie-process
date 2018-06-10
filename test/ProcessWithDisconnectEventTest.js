'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ProcessWithDisconnectEvent
} = require('./../index');

class DisconnectEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {
    // handle
  }

}

new DeepEqualAssertion(
  new ProcessWithDisconnectEvent(process, new DisconnectEvent()), process
).call();
