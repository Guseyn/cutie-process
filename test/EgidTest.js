'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Egid
} = require('./../index');

new Assertion(
  new IsNumber(
    new Egid(process)
  )
).call();
