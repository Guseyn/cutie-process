'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsBoolean
} = require('@cuties/is');
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
