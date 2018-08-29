'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  Forked,
  KilledChildProcess
} = require('@cuties/child-process');
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