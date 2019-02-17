'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  Uid
} = require('./../index')

new Assertion(
  new IsNumber(
    new Uid(
      process
    )
  )
).call()
