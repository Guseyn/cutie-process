'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  ExitCode,
  ExitedProcess
} = require('./../index');

new Assertion(
  new IsNumber(
    new ExitCode(
      new ExitedProcess(process)
    )
  )
).call();
