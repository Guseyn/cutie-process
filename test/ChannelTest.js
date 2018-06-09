'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsUndefined
} = require('@guseyn/cutie-is');
const {
  Channel
} = require('./../index');

new Assertion(
  new IsUndefined(
    new Channel(process)
  )
).call();
