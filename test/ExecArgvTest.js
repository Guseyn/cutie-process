'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  ExecArgv
} = require('./../index')

new Assertion(
  new IsObject(
    new ExecArgv(process)
  )
).call()
