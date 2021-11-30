const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dev',
    aliases: ['bhagwan'],
    description: 'about my owners',
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
                .setTitle("About us!")
                .addField("**DEVELOPERs**", ` 
                <@602051393003585536> `)
                .addField("Anis#2214" ,`Knows html, js, python (lil bit), mongodb`)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}