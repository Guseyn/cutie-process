'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsUndefined
} = require('@cuties/is')
const {
  Channel
} = require('./../index')

new Assertion(
  new IsUndefined(
    new Channel(process)
  )
).call()
