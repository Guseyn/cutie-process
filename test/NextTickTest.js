'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  NextTick
} = require('./../index');

new DeepEqualAssertion(
  new NextTick(
    process, () => {}
  ), process
).call();
