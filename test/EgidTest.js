'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Egid
} = require('./../index');

new Assertion(
  new IsNumber(
    new Egid(process)
  )
).call();
