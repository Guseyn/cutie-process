'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is process
class ExitedProcess extends AsyncObject {
  constructor (process, code) {
    super(process, code)
  }

  syncCall () {
    return (process, code) => {
      process.exit(code)
    }
  }
}

module.exports = ExitedProcess
