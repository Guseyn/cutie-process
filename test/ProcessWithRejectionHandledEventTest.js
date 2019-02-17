'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithRejectionHandledEvent
} = require('./../index')

class RejectionHandledEvent extends Event {
  constructor () {
    super()
  }

  definedBody (p) {
    // handle
  }
}

new DeepStrictEqualAssertion(
  new ProcessWithRejectionHandledEvent(process, new RejectionHandledEvent()), process
).call()
