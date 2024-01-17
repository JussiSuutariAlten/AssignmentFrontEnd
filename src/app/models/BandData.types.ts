export type BandData = {
  members: Members;
};

type Members = {
  current: BandMember[];
  past: BandMember[];
};

export type TransformedBandData = {
  members: Members & {
    all: string[];
  };
  plays: Plays;
};
export type Plays = {
  [key in Instruments]: string[];
};

enum Instruments {
  VOCALS = 'vocals',
  SYNTH = 'synth',
  GUITAR = 'guitar',
  BASS = 'bass',
}

type BandMember = {
  name: string;
  age: number;
  plays: Instruments[];
};
