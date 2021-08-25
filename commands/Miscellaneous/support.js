const discord = require("discord.js");

module.exports = {
  name: "support",
  category: "miscellaneous",
  description: "INVITE Aileen Bot",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`[CLICK HERE](https://discord.com/oauth2/authorize?client_id=780509286970425395&scope=bot&permissions=8) OR [support server ](https://discord.gg/WjhB7Ukr)`)
    .setColor("RANDOM")
    .setFooter(`Developer by Cavendish`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}