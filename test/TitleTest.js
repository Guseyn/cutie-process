'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  Title
} = require('./../index')

new Assertion(
  new IsString(
    new Title(
      process
    )
  )
).call()
