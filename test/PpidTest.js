'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Ppid
} = require('./../index');

new Assertion(
  new IsNumber(
    new Ppid(
      process
    )
  )
).call();
