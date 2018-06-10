'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Forked,
  KilledChildProcess
} = require('@guseyn/cutie-child-process');
const {
  SentMessage
} = require('./../index');

new Assertion(
  new IsString(
    new SentMessage(
      new Forked('./src/SentMessage.js').as('cp'),
      'message'
    )
  )
).after(
  new KilledChildProcess(as('cp'))
).call();