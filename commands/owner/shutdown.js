module.exports = {
    name: "shutdown",
    aliases: ["turnoff"],
    description: "Shuts down the bot !!",
    

    run: async(client, message, args) => {
        
        if (message.author.id !== "810818118322225152") {
            return;
        }
        
        await message.channel.send(`✅ Thank You For Letting Me Rest! EVERYONE I AM GOING TO REST TALK TO <@810818118322225152> FOR MORE INFO `)
        console.log('Client was turned off using the shutdown command.')
        process.exit();
    }
}