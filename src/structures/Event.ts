import { ClientEvents } from 'discord.js';
import { EventType } from "../types/Event";

export class Event<T extends keyof ClientEvents> {
    constructor(props: EventType<T>) {
        Object.assign(this, props)
    }
}