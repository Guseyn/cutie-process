'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  CpuUsage
} = require('./../index')

new Assertion(
  new IsObject(
    new CpuUsage(process)
  )
).call()
