import { Inventory } from "./inventory"

export interface CharacterSheet {
    name: string
    attack : number
    defense : number
    health: number
    skill: string
    class: string
    bonusAttack: number
    bonusDefense: number
    bonusHealth: number
    inventory: Inventory[]
    Quest: string
}
