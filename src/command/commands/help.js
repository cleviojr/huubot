_        = require('lodash')
commands = require('../core/core.js')

module.exports = help = {
    name:        "help",
    description: "shows name, description, and usage for each command.",
    usage:       "type ,help and the command name as the only argument, without the prefix(default: ,)" +
                 "\nLeave with no arguments for the list of commands.",

    run: (m, args) => {
        if (args.length == 0) {
            var final_message = "```css\n"
               final_message += "List of all commands available.\n"
               final_message += "Please use ,help command(without the prefix).\n\n"

            _.each(commands, (c) => {  
                final_message += `,${c['name']}`  
                final_message += "\n"
            })

            final_message += "```"
            m.channel.send(final_message)
        } else {
            if (!commands[args[0]])
                m.channel.send("`I couldn't find your command`")
            else {
                var final_message = "```css\n"
                final_message    += `Description: ${commands[args[0]]['description']}\n`
                final_message    += `Usage: ${commands[args[0]]['usage']}\n`
                final_message    += "```"
                
                m.channel.send(final_message)
            }
        }
    }
}
