'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  DebugPort
} = require('./../index');

new Assertion(
  new IsNumber(
    new DebugPort(process)
  )
).call();
