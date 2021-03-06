'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  Release
} = require('./../index')

new Assertion(
  new IsObject(
    new Release(
      process
    )
  )
).call()
