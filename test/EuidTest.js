'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Euid
} = require('./../index');

new Assertion(
  new IsNumber(
    new Euid(process)
  )
).call();
