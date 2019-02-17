'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  Umask
} = require('./../index')

new Assertion(
  new IsNumber(
    new Umask(
      process
    )
  )
).call()
