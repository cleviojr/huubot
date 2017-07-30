var _ = require('lodash')

module.exports = class CommandParser {
    constructor(m) {
        var words = _.split(m, ' ')

        this.key  = words[0].substring(1)
        this.args = _.slice(words, 1)
    }
} 