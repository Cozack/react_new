import {Deputy} from "./Deputy";

export class Faction {
    name: string;
    factionLeader: Deputy;
    factionMembers: Array<Deputy>;

    constructor(name: string, factionLeader: Deputy, factionMembers: Array<Deputy>) {
        this.name = name;
        this.factionLeader = factionLeader;
        this.factionMembers = factionMembers;
    }

    addDeputy(user: Deputy): void {
        this.factionMembers.push(user);
    }

    deleteDeputy(user: Deputy): Array<Deputy> {
        return this.factionMembers = this.factionMembers.filter(value => value !== user);
    }

    biggestBribeDeputies(): Deputy {
        let deputy = this.factionMembers.filter(value => value.bribe === true).sort((a, b) => {
            return b.sumBribe - a.sumBribe;
        })
        return deputy[0]
    }

    allDeputies(): Array<Deputy> {
        return this.factionMembers;
    }

    AllWhoTookMoney(): Array<Deputy> | Deputy {
        return this.factionMembers.filter(value => value.bribe === true);
    }
}