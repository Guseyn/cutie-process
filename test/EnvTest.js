'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  Env
} = require('./../index')

new Assertion(
  new IsObject(
    new Env(process)
  )
).call()
