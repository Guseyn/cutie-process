
'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  ChildProcess
} = require('child_process');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsBoolean
} = require('@cuties/is');
const {
  Forked
} = require('@cuties/child-process');
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