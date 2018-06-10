'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  Release
} = require('./../index');

new Assertion(
  new IsObject(
    new Release(
      process
    )
  )
).call();
