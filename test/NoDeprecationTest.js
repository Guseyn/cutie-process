'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsBoolean
} = require('@cuties/is')
const {
  NoDeprecation
} = require('./../index')

process.noDeprecation = false
new Assertion(
  new IsBoolean(
    new NoDeprecation(
      process
    )
  )
).call()
