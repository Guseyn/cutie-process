
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
  Forked,
  KilledChildProcess
} = require('@cuties/child-process');
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