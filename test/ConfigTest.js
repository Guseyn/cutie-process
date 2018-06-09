'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  Config
} = require('./../index');

new Assertion(
  new IsObject(
    new Config(process)
  )
).call();
