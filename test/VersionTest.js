'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Version
} = require('./../index');

new Assertion(
  new IsString(
    new Version(
      process
    )
  )
).call();
