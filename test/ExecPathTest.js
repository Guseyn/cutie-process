'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  ExecPath
} = require('./../index');

new Assertion(
  new IsString(
    new ExecPath(process)
  )
).call();
