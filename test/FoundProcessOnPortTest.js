'use strict'

const { as } = require('@cuties/cutie')
const {
  Assertion,
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const FakeServer = require('./../http/FakeServer')
const ClosedServer = require('./../http/ClosedServer')
const Timeout = require('./../timeout/Timeout')
const {
  FoundProcessOnPort,
  Pid,
  KilledProcess
} = require('./../index')

const port = 8008

new KilledProcess(
  new Pid(
    new FoundProcessOnPort(port)
  ), 'SIGINT'
).after(
  new DeepStrictEqualAssertion(
    new FoundProcessOnPort(port), {}
  ).after(
    new FakeServer(port).as('server').after(
      new Timeout(100).after(
        new Assertion(
          new IsObject(
            new FoundProcessOnPort(port)
          )
        ).after(
          new ClosedServer(as('server'))
        )
      )
    )
  )
).call()
