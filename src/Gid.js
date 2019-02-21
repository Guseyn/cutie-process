'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Gid extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.getgid()
    }
  }
}

module.exports = Gid
