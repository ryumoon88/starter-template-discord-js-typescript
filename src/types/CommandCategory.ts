import { CommandType } from "./Command";

export type CommandCategoryType = {
    name: string;
    emoji?: string;
    description?: string;
    commands: CommandType[];
}