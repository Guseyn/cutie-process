'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
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
