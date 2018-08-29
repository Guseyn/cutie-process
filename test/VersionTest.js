'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
