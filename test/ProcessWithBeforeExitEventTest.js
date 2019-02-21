'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithBeforeExitEvent
} = require('./../index')

class BeforeExitEvent extends Event {
  constructor () {
    super()
  }

  body (exitCode) {
    // handle
  }
}

new DeepStrictEqualAssertion(
  new ProcessWithBeforeExitEvent(process, new BeforeExitEvent()), process
).call()
