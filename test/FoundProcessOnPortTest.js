'use strict'

const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('./../index');

const port = 8008;

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGHUP'
).after(
  new DeepEqualAssertion(
    new FoundProcessOnPort(port), {}
  )
).call();
