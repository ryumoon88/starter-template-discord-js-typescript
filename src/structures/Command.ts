import { CommandType } from "../types/Command";

export class Command {
    constructor(props: CommandType) {
        Object.assign(this, props);
    }
}