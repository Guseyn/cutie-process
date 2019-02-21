'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number[]
class Hrtime extends AsyncObject {
  constructor (process, time) {
    super(process, time)
  }

  syncCall () {
    return (process, time) => {
      return process.hrtime(time)
    }
  }
}

module.exports = Hrtime
