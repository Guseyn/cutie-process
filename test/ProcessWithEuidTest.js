'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ProcessWithEuid
} = require('./../index')

try {
  new DeepStrictEqualAssertion(
    new ProcessWithEuid(process, 501), process
  ).call()
} catch (err) {
  console.log('This function is only available on POSIX platforms (i.e. not Windows or Android).')
}
