'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithSignalEvent
} = require('./../index')

class SignalEvent extends Event {
  constructor () {
    super()
  }

  body () {
    // handle
  }
}

new DeepStrictEqualAssertion(
  new ProcessWithSignalEvent(process, 'SIGHUP', new SignalEvent()), process
).call()
