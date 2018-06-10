'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  Versions
} = require('./../index');

new Assertion(
  new IsObject(
    new Versions(
      process
    )
  )
).call();
