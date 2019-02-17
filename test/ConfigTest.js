'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  Config
} = require('./../index')

new Assertion(
  new IsObject(
    new Config(process)
  )
).call()
