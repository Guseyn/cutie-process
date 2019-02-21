'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithWarningEvent
} = require('./../index')

class WarningEvent extends Event {
  constructor () {
    super()
  }

  body (warning) {
    // handle
    console.log(warning)
  }
}

new DeepStrictEqualAssertion(
  new ProcessWithWarningEvent(
    process, new WarningEvent()
  ), process
).call()
