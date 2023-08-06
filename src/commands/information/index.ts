import { CommandCategory } from "../../structures/CommandCategory";
import { CommandType } from "../../types/Command";
import ping from "./ping";

export default new CommandCategory({
    name: 'Information',
    commands: [
        ping,
    ] as CommandType[]
})