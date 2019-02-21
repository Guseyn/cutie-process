'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Umask extends AsyncObject {
  constructor (process, mask) {
    super(process, mask)
  }

  syncCall () {
    return (process, mask) => {
      return process.umask(mask)
    }
  }
}

module.exports = Umask
