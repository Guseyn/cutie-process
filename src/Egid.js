'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Egid extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.getegid()
    }
  }
}

module.exports = Egid
