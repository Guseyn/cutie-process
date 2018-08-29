'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Uptime
} = require('./../index');

new Assertion(
  new IsNumber(
    new Uptime(
      process
    )
  )
).call();
