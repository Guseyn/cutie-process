'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
