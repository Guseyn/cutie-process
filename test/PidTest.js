'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  Pid
} = require('./../index')

new Assertion(
  new IsNumber(
    new Pid(
      process
    )
  )
).call()
