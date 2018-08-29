'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsBoolean
} = require('@cuties/is');
const {
  NoDeprecation
} = require('./../index');

// TDOD: figure it out why it does not work
new Assertion(
  new IsBoolean(
    new NoDeprecation(
      process
    )
  )
)///.call();
