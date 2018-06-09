'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  CpuUsage
} = require('./../index');

new Assertion(
  new IsObject(
    new CpuUsage(process)
  )
).call();
