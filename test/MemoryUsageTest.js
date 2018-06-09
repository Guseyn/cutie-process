'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  MemoryUsage
} = require('./../index');

new Assertion(
  new IsObject(
    new MemoryUsage(process)
  )
).call();
