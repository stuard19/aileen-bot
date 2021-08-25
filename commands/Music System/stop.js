const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'stop', // Optional
    category: 'Music System',
    description: 'Clears the queue and leave the voice', 
    aliases: ['st'], // Optional
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a voice channel to use this command.`)
            if (!voice_channel) return message.channel.send(embed);
            let isDone = client.player.stop(message);
            const stop = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription('Music stopped & the queue was cleared!')
            if(isDone)
            message.channel.send(stop);
    }
}