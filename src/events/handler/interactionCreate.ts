import { Client } from "../../structure/Client";
import discord from "discord.js";

export default async (Client: Client, interaction: discord.Interaction) => {

	if(!interaction.isCommand())return

		const command = Client.commands.get(interaction.commandName)

		if (!command) return;

		try {
			command.run(Client, interaction);
		} catch (error) {
			console.error(error);
			return interaction.reply({
				content: 'Il y a eu une erreur !',
				ephemeral: true
			});
		}
}
