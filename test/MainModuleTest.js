'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  MainModule
} = require('./../index')

new DeepStrictEqualAssertion(
  new MainModule(process), module
).call()
