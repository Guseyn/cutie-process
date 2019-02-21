'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class ExecPath extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.execPath
    }
  }
}

module.exports = ExecPath
