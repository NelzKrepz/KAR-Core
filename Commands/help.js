const { MessageEmbed } = require('discord.js');

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
		execute: ({ Message, Client }) => {
			let categories = [];
			let embed = new MessageEmbed();
			embed.setTitle(Client.user.username+' Command List');
			fs.readdirSync('./Commands/')
				.filter(file => file.endsWith("js"))
				.forEach((fileName) => {
					let fileProperties = require('../Commands/'+fileName).Properties;
					if (!categories.some(c=>c.name===fileProperties.category)) {
						categories.push({name:fileProperties.category, commands:[]});
					}
					categories.find(c=>c.name===fileProperties.category)
						.commands.push(fileName.replace('.js', ''));
				});
			for (category in categories) {
				
			}
			
			Message.channel.send(embed);
		}
	},
	SlashCommand: {
		properties: {},
		execute: ({Interaction}) => {
			if (Interaction.options.getBoolean('silent')) {
				Interaction.channel.send(Interaction.options.getString('message', true));
				Interaction.reply({content:'Success!', ephemeral:true});
				Interaction.deleteReply();
			} else
				Interaction.reply({content:Interaction.options.getString('message', true)});
		}
	}
}