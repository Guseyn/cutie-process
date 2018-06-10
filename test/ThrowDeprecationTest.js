'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  ThrowDeprecation
} = require('./../index');

// does not work...
new Assertion(
  new IsBoolean(
    new ThrowDeprecation(
      process
    )
  )
)//.call();
