'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Umask
} = require('./../index');

new Assertion(
  new IsNumber(
    new Umask(
      process
    )
  )
).call();
