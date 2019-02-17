'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsArray
} = require('@cuties/is')
const {
  Argv
} = require('./../index')

new Assertion(
  new IsArray(
    new Argv(process)
  )
).call()
