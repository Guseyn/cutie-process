'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  Env
} = require('./../index');

new Assertion(
  new IsObject(
    new Env(process)
  )
).call();
