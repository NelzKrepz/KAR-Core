const API = require('../Modules/API.js')();

module.exports = {
	Properties: {
		description: "Verify.",
		usage: ' [<code>]',
		disabled: false,
		category: "Public"
	},
	RegularCommand: {
		properties: {
			aliases: ['auth']
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