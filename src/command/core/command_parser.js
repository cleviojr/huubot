var _ = require('lodash')

module.exports = class CommandParser {
    constructor(m) {
        var split = _.split(m, ' ')

        this.key   =  split[0].substring(1)
        this.args  = _.slice(split, 1)
    }
} 