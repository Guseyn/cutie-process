'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  MainModule
} = require('./../index');

new DeepEqualAssertion(
  new MainModule(process), module
).call();
