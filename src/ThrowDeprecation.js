'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class ThrowDeprecation extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.throwDeprecation
    }
  }
}

module.exports = ThrowDeprecation
