'use strict'

const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ProcessWithEmitedWarning
} = require('./../index');

new DeepEqualAssertion(
  new ProcessWithEmitedWarning(process, 'warning'), process
).call();
