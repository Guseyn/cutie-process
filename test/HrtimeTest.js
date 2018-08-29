'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsArray
} = require('@cuties/is');
const {
  Hrtime
} = require('./../index');

new Assertion(
  new IsArray(
    new Hrtime(process)
  )
).call();
