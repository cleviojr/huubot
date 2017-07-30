//this is meant to be a tool that creates a credentials.json for you necessary to run the huubot
//to run this, please use: node credentials.js
//make sure you already have all dependencies installed from package.json
//if you don't have the dependencies installed then use: npm install

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