module.exports = akane = {
    name: "akane",
    description: "Send an invite to Akane discord bot, see more: https://github.com/cleviojr/Akane",
    Usage: "type ,akane",

    run: (m, args) => {
        m.channel.send('Invite link: https://discordapp.com/api/oauth2/authorize?client_id=322467719050166282&scope=bot&permissions=66583616')
    }
}