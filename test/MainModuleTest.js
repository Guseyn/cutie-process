'use strict'

const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  MainModule
} = require('./../index');

new DeepEqualAssertion(
  new MainModule(process), module
).call();
