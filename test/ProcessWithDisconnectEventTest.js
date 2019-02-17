'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithDisconnectEvent
} = require('./../index')

class DisconnectEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {
    // handle
  }
}

new DeepStrictEqualAssertion(
  new ProcessWithDisconnectEvent(process, new DisconnectEvent()), process
).call()
