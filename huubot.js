require('./src/log.js')

const fs    = require('fs')
var creds   = JSON.parse(fs.readFileSync('src/hidden/credentials.json', 'utf8'))
const token = creds.user_token
const id    = creds.user_id
log('Loaded credentials.json.')

const Discord = require('discord.js')
const client  = new Discord.Client()
log('Loaded discord.js.')

const ReadyListener   = require('./src/listeners/ready_listener.js')
const CommandListener = require('./src/listeners/command_listener.js')
new ReadyListener(client)
new CommandListener(client, id)
log('Loaded all listeners.')

client.login(token)
log('Trying to login...')
