'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Argv0
} = require('./../index');

new Assertion(
  new IsString(
    new Argv0(process)
  )
).call();
