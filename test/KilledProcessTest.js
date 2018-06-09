
'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  ChildProcess
} = require('child_process');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  Forked
} = require('@guseyn/cutie-child-process');
const {
  IsConnected,
  Pid,
  KilledProcess
} = require('./../index');

new Assertion(
  new IsConnected(
    new Forked('./src/IsConnected.js').as('cp'), 
    ChildProcess
  )
).after(
  new Assertion(
    new KilledProcess(
      new Pid(
        as('cp')
      )
    ), ChildProcess
  )
).call();