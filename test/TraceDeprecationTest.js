'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  TraceDeprecation
} = require('./../index');

// does not work...
new Assertion(
  new IsBoolean(
    new TraceDeprecation(
      process
    )
  )
)//.call();
