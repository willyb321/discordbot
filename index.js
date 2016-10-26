'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.on('message', message => {
  if (message.content === 'ding') {
    message.reply('dong');
  }
});


client.on('message', message => {
	if (message.content === 'm8') {
		message.reply('u wot')
	}
})

client.on('message', message => {
	if (message.content === 'm8') {
		message.reply('u wot')
	}
})

client.on('message', message => {
	if (message.author.id !== '240632939375755265') {
		message.reply(message.timestamp)
}})

client.login(process.env.DISCORD_TOKEN);
