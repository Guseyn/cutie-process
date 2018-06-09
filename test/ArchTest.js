'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Arch
} = require('./../index');

new Assertion(
  new IsString(
    new Arch(process)
  )
).call();
