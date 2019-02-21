'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class Title extends AsyncObject {
  constructor (process) {
    super(process)
  }

  syncCall () {
    return (process) => {
      return process.title
    }
  }
}

module.exports = Title
