'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
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
