const { prefix } = require('../index')
const client = require('../index')





client.on('ready', async () => {
  client.user.setStatus('idle');
  console.log(`${client.user.username} ✅`)
  
  const status = [
     ` ${client.guilds.cache.size} Servers| .help, .dev `,
    ` ${client.users.cache.size} Users | .help, .dev`,
    
    
     
     
  ]
 setInterval(() => {
     client.user.setActivity(status[Math.floor(Math.random() * status.length)], { type: 'WATCHING' }) //You Can Set The Type To PLAYING/WATCHING/COMPETING/LISTENING.
  }, 5000)

  

})