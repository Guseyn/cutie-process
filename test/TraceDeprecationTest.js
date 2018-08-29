'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsBoolean
} = require('@cuties/is');
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
