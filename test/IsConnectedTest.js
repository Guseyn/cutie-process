
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
  Forked,
  KilledChildProcess
} = require('@guseyn/cutie-child-process');
const {
  IsConnected
} = require('./../index');

new Assertion(
  new IsConnected(
    new Forked('./src/IsConnected.js').as('cp'), 
    ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();