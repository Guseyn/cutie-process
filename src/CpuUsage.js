'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class CpuUsage extends AsyncObject {
  constructor (process, previousValue) {
    super(process, previousValue)
  }

  syncCall () {
    return (process, previousValue) => {
      return process.cpuUsage(previousValue)
    }
  }
}

module.exports = CpuUsage
