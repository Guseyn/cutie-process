'use strict'

const {
  ChildProcess
} = require('child_process');
const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  Forked,
  KilledChildProcess
} = require('@guseyn/cutie-child-process');
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