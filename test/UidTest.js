'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Uid
} = require('./../index');

new Assertion(
  new IsNumber(
    new Uid(
      process
    )
  )
).call();
