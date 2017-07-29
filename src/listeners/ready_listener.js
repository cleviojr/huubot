require('../log.js')

module.exports = class ReadyListener {
    constructor(client) {
        client.on('ready', () => {
            log("And I'm online!")
        })
    }
}