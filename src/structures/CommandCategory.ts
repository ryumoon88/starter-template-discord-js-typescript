import { CommandCategoryType } from "../types/CommandCategory";

export class CommandCategory {
    constructor(props: CommandCategoryType) {
        Object.assign(this, props);
    }
}   