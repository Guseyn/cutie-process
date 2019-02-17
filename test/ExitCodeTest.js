'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  ExitCode,
  ExitedProcess,
  ProcessWithExitEvent
} = require('./../index')

class ExitEvent extends Event {
  constructor () {
    super()
  }

  definedBody (code) {
    process.exitCode = 0
    new StrictEqualAssertion(
      new ExitCode(process), code
    ).call()
  }
}

new ExitedProcess(
  new ProcessWithExitEvent(process, new ExitEvent())
).call()
