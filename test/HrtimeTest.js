'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsArray
} = require('@guseyn/cutie-is');
const {
  Hrtime
} = require('./../index');

new Assertion(
  new IsArray(
    new Hrtime(process)
  )
).call();
