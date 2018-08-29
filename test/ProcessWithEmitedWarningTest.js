'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ProcessWithEmitedWarning
} = require('./../index');

new DeepEqualAssertion(
  new ProcessWithEmitedWarning(process, 'warning'), process
).call();
