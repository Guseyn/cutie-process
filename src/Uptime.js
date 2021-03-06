'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Uptime extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.uptime()
    }
  }
}

module.exports = Uptime
