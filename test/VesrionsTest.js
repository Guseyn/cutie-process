'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  Versions
} = require('./../index')

new Assertion(
  new IsObject(
    new Versions(
      process
    )
  )
).call()
