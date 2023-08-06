import { Event } from "../../../structures/Event";

export default new Event({
    name: 'guildMemberAdd',
    exec(member) {
        if (member.user.bot && process.env.BOT_ROLE_ID!) {
            member.roles.add(process.env.BOT_ROLE_ID);
        }
    },
})