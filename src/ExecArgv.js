'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class ExecArgv extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.execArgv
    }
  }
}

module.exports = ExecArgv
