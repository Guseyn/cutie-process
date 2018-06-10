'use strict'

const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ProcessWithGid
} = require('./../index');

try {
  new DeepEqualAssertion(
    new ProcessWithGid(process, 501), process
  ).call();
} catch (err) {
  console.log('This function is only available on POSIX platforms (i.e. not Windows or Android).');
}
