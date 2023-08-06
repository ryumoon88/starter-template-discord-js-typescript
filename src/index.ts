import { Client } from "discord.js";
import { config } from "dotenv";
import { ExtendedClient } from "./structures/Client";

config();

export const client = new ExtendedClient();

client.start();
// console.log(process.env.TOKEN);