import { ChatInputCommandInteraction, Colors, EmbedBuilder, GuildMember } from "discord.js";
import { client } from "../..";
import { Event } from "../../structures/Event";

export default new Event({
    name: 'interactionCreate',
    async exec(interaction) {
        if (!interaction.isChatInputCommand()) return;
        console.log(client.commands)
        const command = client.commands.get(interaction.commandName);

        if (!command) {
            const embed = new EmbedBuilder()
                .setTitle("ERROR")
                .setDescription("This command is currently unavailable now!")
                .setColor(Colors.Red)
            interaction.reply({ embeds: [embed], ephemeral: true });
            return;
        }

        try {
            await interaction.deferReply({ ephemeral: command.ephemeral });
            await command.exec({ interaction: interaction as ChatInputCommandInteraction, client, member: interaction.member as GuildMember });
        } catch (error) {
            console.log(error);
        }
    },
})