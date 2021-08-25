const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "gay",
  aliases: [],
  category: "Fun",
  description: "Return A Gay Image!",
  usage: "a!gay | <Mention Or ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Data = await Random.Gay({ Image: Member.user.displayAvatarURL({ format: "png" }), Color: Color });

    return message.channel.send(Data);
  }
};
