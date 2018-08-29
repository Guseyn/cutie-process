'use strict'

const {
  ChildProcess
} = require('child_process');
const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
const {
  Forked,
  KilledChildProcess
} = require('@cuties/child-process');
const {
  DisconnectedProcess
} = require('./../index');

new Assertion(
  new Is(
    new DisconnectedProcess(
      new Forked('./src/DisconnectedProcess.js').as('cp')
    ), ChildProcess
  )
).after(
  new KilledChildProcess(as('cp'))
).call();