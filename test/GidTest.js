'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Gid,
  ExitedProcess
} = require('./../index');

new Assertion(
  new IsNumber(
    new Gid(
      process
    )
  )
).call();
