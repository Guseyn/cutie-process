'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class TraceDeprecation extends AsyncObject {
  constructor (process) {
    super(process)
  }

  definedSyncCall () {
    return (process) => {
      return process.traceDeprecation
    }
  }
}

module.exports = TraceDeprecation
