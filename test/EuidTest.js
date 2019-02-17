'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsNumber
} = require('@cuties/is')
const {
  Euid
} = require('./../index')

new Assertion(
  new IsNumber(
    new Euid(process)
  )
).call()
