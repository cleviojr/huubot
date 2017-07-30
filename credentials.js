var fs           = require('fs')
var readlineSync = require('readline-sync')
var _            = require('lodash')

var token = readlineSync.question('Insert your token: ')
var id    = readlineSync.question('Insert your ID: ')

var credentials = {
    user_token: _.replace(_.replace(token, '"', ''), '"', ''),
       user_id: id,
}

fs.mkdirSync('src/hidden/')
fs.writeFileSync('src/hidden/credentials.json', JSON.stringify(credentials, null, 2), 'utf8')