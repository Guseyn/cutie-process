'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Ppid
} = require('./../index');

new Assertion(
  new IsNumber(
    new Ppid(
      process
    )
  )
).call();
