var fs            = require('fs')
var _             = require('lodash')
var commands      = require('../command/core/core.js')
var CommandParser = require('../command/core/command_parser.js')
            
var all_commands = _.keys(commands)

module.exports = class CommandListener {
    constructor(client, id) {
        client.on('message', (m) => CommandListener.prototype.runCommand(m, id)) 
    }

    runCommand(m, id) {
        if (!m.author.id == id) return
        if (!m.content.indexOf(',') == 0) return

        var command = new CommandParser(m)
        var key = command.key
        var args = command.args

        if (this.isCommand(key)) {
            commands[key].run(m, args)
        }
    } 

    isCommand(key) {
        var is_command = false

        _.each(all_commands, (c) => {
            if (c == key) {
                is_command = true
                return false
            }
        })

        return is_command
    }
}
