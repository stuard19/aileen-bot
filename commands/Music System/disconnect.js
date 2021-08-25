const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'dc', // Optional
    aliases: [], // Optional
    category: 'Music System',
    description: 'disconnect the voice channel!', 
        
        run: async (client, message, args) => {
            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a voice channel to use this command.`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.leave()
            message.react('📀')
              
          }
}