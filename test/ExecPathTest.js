'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  ExecPath
} = require('./../index');

new Assertion(
  new IsString(
    new ExecPath(process)
  )
).call();
