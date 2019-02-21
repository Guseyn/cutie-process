'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class ExitCode extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.exitCode
    }
  }
}

module.exports = ExitCode
