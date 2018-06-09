'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Chdir
} = require('./../index');

new Assertion(
  new IsString(
    new Chdir(process, './test')
  )
).call();
