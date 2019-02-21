'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class MemoryUsage extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.memoryUsage()
    }
  }
}

module.exports = MemoryUsage
