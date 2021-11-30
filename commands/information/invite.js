const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: '',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        message.channel.send(
            new MessageEmbed()
                .setColor('BLUE')
                .setAuthor(message.author.tag)
             
                .setTitle("Invite Link")
                .setDescription( ` <@${message.author.id}> Support me by inviting me.It means a lot to the developers and us `)
                .addField("**Invite Link**", `[Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=915297793835405313&permissions=545460846583&scope=bot)`)
                .addField("**DEVELOPER**", ` <@602051393003585536>`)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}
// let me fix it
//set author
//Support me by inviting me.It means a lot to the developers and us
