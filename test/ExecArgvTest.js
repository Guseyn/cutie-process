'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  ExecArgv
} = require('./../index');

new Assertion(
  new IsObject(
    new ExecArgv(process)
  )
).call();
