'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Cwd
} = require('./../index');

new Assertion(
  new IsString(
    new Cwd(process)
  )
).call();
