'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithUnhandledRejectionEvent
} = require('./../index')

class UnhandledRejectionEvent extends Event {
  constructor () {
    super()
  }

  body (reason, p) {
    // handle
  }
}

new DeepStrictEqualAssertion(
  new ProcessWithUnhandledRejectionEvent(
    process, new UnhandledRejectionEvent()
  ), process
).call()
