'use strict'

const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  NextTick
} = require('./../index');

new DeepEqualAssertion(
  new NextTick(
    process, () => {}
  ), process
).call();
