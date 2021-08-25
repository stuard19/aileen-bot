const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume', // Optional
    category: 'Music System',
    description: 'Set the volume of the bot in the voice', 
    aliases: ['setvolume'], // Optional
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a voice channel to use this command.`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.setVolume(message, parseInt(args[0]));
            const volume = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`Volume set to ${args[0]}%!`)
            if(isDone)
            message.channel.send(volume);
    }
}