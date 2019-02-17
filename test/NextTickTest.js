'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  NextTick
} = require('./../index')

new DeepStrictEqualAssertion(
  new NextTick(
    process, () => {}
  ), process
).call()
