'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
