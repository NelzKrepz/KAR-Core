const { EmbedBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	Properties: {
		description: "Showing all commands.",
		usage: '',
		disabled: false,
		category: "Public"
	},
	RegularCommand: {
		properties: {
			aliases: ['commands', 'cmds']
		},
		execute: ({ Message, Client, Command }) => {
			let categories = [];
			let embed = new EmbedBuilder();
			embed.setTitle(Client.user.username+' Command List');
			fs.readdirSync('./Commands/')
				.filter(file => file.endsWith("js"))
				.forEach((fileName) => {
					let fileProperties = require('../Commands/'+fileName).Properties;
					if (!categories.some(c=>c.name===fileProperties.category)) {
						categories.push({name:fileProperties.category, commands:[]});
					}
					categories.find(c=>c.name===fileProperties.category)
						.commands.push({
command: Command.prefix+fileName.replace('.js','')+fileProperties.usage,
description: fileProperties.description
});
				});
			categories.forEach((category) => {
				//console.log(category);
let cmds = '';
category.commands.forEach((cmd) => {
	cmds+=`\`${cmd.command}\` ${cmd.description}\n`;
});
				embed.addFields([
					{
						name: category.name,
						value: cmds,
						inline: true
					}
				])
			});
			
			Message.channel.send({embeds: [embed]});
		}
	},
	SlashCommand: {
		properties: {},
		execute: ({Interaction}) => {
			if (Interaction.options.getBoolean('silent')) {
				Interaction.channel.send(Interaction.options.getString('message', true));
				Interaction.reply({content:'Success!', ephemeral:true});
				//Interaction.deleteReply();
			} else
				Interaction.reply({content:Interaction.options.getString('message', true)});
		}
	}
}