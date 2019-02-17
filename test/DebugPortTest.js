'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  DebugPort
} = require('./../index')

new Assertion(
  new IsNumber(
    new DebugPort(process)
  )
).call()
