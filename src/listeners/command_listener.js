var fs            = require('fs')
var _             = require('lodash')
var commands      = require('../command/core/core.js')
var CommandParser = require('../command/core/command_parser.js')
            
var all_commands = _.keys(commands)
var prefix       = JSON.parse(fs.readFileSync('src/hidden/credentials.json')).prefix

module.exports = class CommandListener {
    constructor(client, id) {
        client.on('message', (m) => CommandListener.prototype.runCommand(m, id)) 
    }

    runCommand(m, id) {
        var command = new CommandParser(m)
        var key = command.key
        var args = command.args

        if (this.isCommand(key, m, id)) {
            commands[key].run(m, args)
        }
    } 

    isCommand(key, m, id) {
        if (m.content.indexOf(prefix) == 0 & m.author.id == id) { 
            return _.each(all_commands, (c) => {
                if (c == key) {
                    return true
                }
            })
        } else {
            return false
        }
    }
}