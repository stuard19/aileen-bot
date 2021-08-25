const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "miscellaneos",
  description: "Invite Aileen Bot",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Here invite link`)
    .setDescription(`[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=780509286970425395&permissions=8&scope=bot) OR [support server ](https://discord.gg/c2TpqaZXsr)`)
    .setColor("RANDOM")
    .setFooter(`Developer by emilis and Stuard`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}