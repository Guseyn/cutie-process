'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Title
} = require('./../index');

new Assertion(
  new IsString(
    new Title(
      process
    )
  )
).call();
