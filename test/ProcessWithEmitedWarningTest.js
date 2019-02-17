'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithEmitedWarning
} = require('./../index')

new DeepStrictEqualAssertion(
  new ProcessWithEmitedWarning(process, 'warning'), process
).call() // TODO: fix it
