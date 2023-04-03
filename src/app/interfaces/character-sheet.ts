import { Inventory } from "./inventory"

export interface CharacterSheet {
    username: string,
    characterName: string
    class: string
    attack : number
    defense : number
    health: number
    skill: string
    inventory: Inventory[]
    quest: string

    // bonusAttack: number
    // bonusDefense: number
    // bonusHealth: number
  
}
