'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsArray
} = require('@guseyn/cutie-is');
const {
  Argv
} = require('./../index');

new Assertion(
  new IsArray(
    new Argv(process)
  )
).call();
