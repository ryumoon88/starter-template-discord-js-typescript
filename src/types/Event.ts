import { ClientEvents, Awaitable } from 'discord.js';

type EventExec<T extends keyof ClientEvents> = (...args: ClientEvents[T]) => Awaitable<any>;

export type EventType<T extends keyof ClientEvents> = {
    name: T,
    exec: EventExec<T>
}
