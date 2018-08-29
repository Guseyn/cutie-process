'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  Chdir
} = require('./../index');

new Assertion(
  new IsString(
    new Chdir(process, './test')
  )
).call();
