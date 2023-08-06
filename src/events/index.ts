import { EventType } from "../types/Event"
import guildMemberAdd from "./guildMemberAdd"
import interactionCreate from "./interactionCreate"
// import guildMemberAdd from "./guildMemberAdd"
import ready from "./ready"

export default [
    ready,
    ...guildMemberAdd,
    ...interactionCreate
] as EventType<any>[]