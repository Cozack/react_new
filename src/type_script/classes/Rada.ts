import {Faction} from "./Faction";
import {Deputy} from "./Deputy";

export class Rada {
    radaFactions: Array<Faction>;
    radaMember: Deputy;

    constructor(radaFactions: Array<Faction>, radaMember: Deputy) {
        this.radaFactions = radaFactions;
        this.radaMember = radaMember;
    }

    addNewFaction(faction: Faction): void {
        this.radaFactions.push(faction);
    }

    deleteFaction(faction: Faction): Array<Faction> {
        return this.radaFactions = this.radaFactions.filter(value => value !== faction);
    }

    allFactions(): Array<Faction> {
        return this.radaFactions;
    }

    someFaction(faction: Faction):Array<Faction> {
        return this.radaFactions.filter(value => value === faction);
    }

    biggestBribeTaker(): Deputy {
        let bribeTaker: Array<Deputy> | Deputy = [];
        for (const faction of this.radaFactions) {
            bribeTaker.push(faction.biggestBribeDeputies());
        }
        bribeTaker.sort((a, b) => {
            return b.sumBribe - a.sumBribe;
        });
        return bribeTaker[0];
    }
}