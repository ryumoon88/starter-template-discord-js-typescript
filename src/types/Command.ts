import { Awaitable, ChatInputCommandInteraction, Client, GuildMember, PermissionResolvable, SlashCommandBuilder } from "discord.js"

type CommandProps = {
    interaction: ChatInputCommandInteraction;
    client: Client;
    member: GuildMember;
}

type CommandExec = (props: CommandProps) => Awaitable<unknown>

export type CommandType = {
    meta: SlashCommandBuilder;
    userPermissions?: PermissionResolvable[];
    ephemeral?: boolean;
    cooldown?: number;
    exec: CommandExec;
}