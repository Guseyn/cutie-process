'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ProcessWithGroups
} = require('./../index');

try {
  new DeepEqualAssertion(
    new ProcessWithGroups(process, [2]), process
  ).call();
} catch (err) {
  console.log('This function is only available on POSIX platforms (i.e. not Windows or Android).');
}
