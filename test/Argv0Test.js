'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  Argv0
} = require('./../index')

new Assertion(
  new IsString(
    new Argv0(process)
  )
).call()
