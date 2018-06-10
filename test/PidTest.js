'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Pid
} = require('./../index');

new Assertion(
  new IsNumber(
    new Pid(
      process
    )
  )
).call();
