'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
