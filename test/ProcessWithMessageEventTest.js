'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithMessageEvent
} = require('./../index')

class MessageEvent extends Event {
  constructor () {
    super()
  }

  definedBody (message) {
    // handle
  }
}

new DeepStrictEqualAssertion(
  new ProcessWithMessageEvent(process, new MessageEvent()), process
).call()
