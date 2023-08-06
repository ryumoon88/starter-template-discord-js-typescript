import { Colors, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../../structures/Command";
import { client } from "../..";

const meta = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping the bot')

export default new Command({
    meta: meta,
    ephemeral: true,
    exec({ interaction }) {
        const embed = new EmbedBuilder()
        .setTitle('Ping')
        .setColor('Random')
        .setDescription(`Pong! Latency is ${client.ws.ping}ms.`)

        interaction.followUp({
            embeds: [embed]
        });
    },
})