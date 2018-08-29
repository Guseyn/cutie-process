'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  Cwd
} = require('./../index');

new Assertion(
  new IsString(
    new Cwd(process)
  )
).call();
