
'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  ChildProcess
} = require('child_process')
const {
  Assertion,
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Forked
} = require('@cuties/child-process')
const {
  IsConnected,
  Pid,
  KilledProcess
} = require('./../index')

new Assertion(
  new IsConnected(
    new Forked('./src/IsConnected.js').as('cp'),
    ChildProcess
  )
).after(
  new StrictEqualAssertion(
    new KilledProcess(
      new Pid(
        as('cp')
      )
    ),
    new Pid(
      as('cp')
    )
  )
).call()
