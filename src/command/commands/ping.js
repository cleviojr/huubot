module.exports = ping = {
    name: "ping",
    description: "says pong",
    usage: "type ping",

    run: (m, args) => {
        m.channel.send('pong')
    }
}