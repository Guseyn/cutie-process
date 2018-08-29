'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsObject
} = require('@cuties/is');
const {
  MemoryUsage
} = require('./../index');

new Assertion(
  new IsObject(
    new MemoryUsage(process)
  )
).call();
