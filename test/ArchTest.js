'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  Arch
} = require('./../index');

new Assertion(
  new IsString(
    new Arch(process)
  )
).call();
