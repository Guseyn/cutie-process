'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithUncaughtExceptionEvent
} = require('./../index')

class UncaughtExceptionEvent extends Event {
  constructor () {
    super()
  }

  body (/* error */) {
    // handle
  }
}

new DeepStrictEqualAssertion(
  new ProcessWithUncaughtExceptionEvent(
    process, new UncaughtExceptionEvent()
  ), process
).call()
