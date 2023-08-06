import { Event } from "../structures/Event";

export default new Event({
    name: 'ready',
    exec: (client) => {
        console.log(`${client.user.tag} is not online!`);
    }
})