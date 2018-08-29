'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ProcessWithUid
} = require('./../index');

try {
  new DeepEqualAssertion(
    new ProcessWithUid(process, 501), process
  ).call();
} catch (err) {
  console.log('This function is only available on POSIX platforms (i.e. not Windows or Android).');
}
