import { Injectable } from '@angular/core';
import { BandData, Plays, TransformedBandData } from '../models/BandData.types';

@Injectable({
  providedIn: 'root',
})
export class TransformBandService {
  constructor() {}

  TransFormBandData(bandData: BandData): TransformedBandData {
    const tempAll = [...bandData.members.current, ...bandData.members.past];
    tempAll.sort((memberA, memberB) => {
      //  If Ages are equal we sort by Name
      if (memberA.age === memberB.age) {
        return memberA.name < memberB.name ? -1 : 1;
      }
      return memberB.age - memberA.age;
    });
    const all = tempAll.map(member => member.name.toLowerCase());

    const tempPlays = {} as Plays;

    for (let i = 0; i < tempAll.length; i++) {
      const member = tempAll[i];
      const memberPlays = member.plays;
      for (let j = 0; j < memberPlays.length; j++) {
        const play = memberPlays[j];
        if (!tempPlays[play]) {
          tempPlays[play] = [];
        }
        tempPlays[play].push(member.name.toLowerCase());
      }
    }

    const tempBand = { ...bandData, plays: tempPlays } as TransformedBandData;
    tempBand.members.all = all;
    return tempBand;
  }
}
