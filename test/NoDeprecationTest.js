'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
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
