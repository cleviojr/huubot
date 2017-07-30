module.exports = choose = {
    name:        "choose",
    description: "choose between arguments",
    usage:       "type ,choose with_some_arg maybe_another_one (how many you want)",

    run: (m, args) => {
        m.channel.send(`**Result**: ${args[Math.floor(Math.random() * args.length)]}.`)
    }
}