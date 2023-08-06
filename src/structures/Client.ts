import { Client, Collection, GatewayIntentBits } from "discord.js";
import events from "../events";
import { CommandType } from "../types/Command";
import categories from "../commands";


export class ExtendedClient extends Client {
    commands: Collection<string, CommandType> = new Collection();

    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
            ]
        });
    }

    async start() {
        this.registerModules();
        this.login(process.env.TOKEN);
    }

    async registerModules() {
        await this.registerEvents();
        await this.registerCommands();
    }

    async registerEvents() {
        events.forEach((event) => {
            this.on(event.name, event.exec);
        });
    }

    async registerCommands() {
        console.log(categories[0].commands);
        categories.forEach((category) => {
            category.commands.forEach((command) => {
                this.commands.set(command.meta.name, command);
            })
        })
    }
}