'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Platform
} = require('./../index');

new Assertion(
  new IsString(
    new Platform(
      process
    )
  )
).call();
