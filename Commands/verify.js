const API = require('../Modules/API.js')();

module.exports = {
	Properties: {
		description: "Echo message.",
		usage: ' [<code>]',
		disabled: false,
		category: "Public"
	},
	RegularCommand: {
		properties: {
			aliases: ['echo']
		},
		execute: ({ Message, Command }) => {
			API.generateAuth()
			Message.delete();
		}
	},
	SlashCommand: {
		properties: {},
		execute: ({Interaction}) => {
			Interaction.reply({content:'Processing...', ephemeral:true});
		}
	}
}