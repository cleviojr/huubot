module.exports = ping = {
    name:        "ping",
    description: "says pong and your huubot ping to websocket",
    usage:       "type ,ping",

    run: (m, args) => {
        m.channel.send(`**Pong!** ${m.client.ping}ms.`)
    }
}