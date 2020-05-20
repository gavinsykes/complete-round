import completeRound from './completeRound';
import { expect } from 'chai';
import 'mocha';

const expectedResults = [
  {
    testVal : {
      number    : 3.5,
      rounding  : 1,
      direction : 'down'
    },
    eR      : 3
  },
  {
    testVal : {
      number    : 3.5,
      rounding  : 1,
      direction : 'up'
    },
    eR      : 4
  },
  {
    testVal : {
      number    : 3.5,
      rounding  : 1,
      direction : 'away'
    },
    eR      : 4
  },
  {
    testVal : {
      number    : 3.5,
      rounding  : 1,
      direction : 'towards'
    },
    eR      : 3
  },
  {
    testVal : {
      number    : 3.5,
      rounding  : 1,
      direction : 'closest'
    },
    eR      : 4
  },
  {
    testVal : {
      number    : -3.5,
      rounding  : 1,
      direction : 'down'
    },
    eR      : -4
  },
  {
    testVal : {
      number    : -3.5,
      rounding  : 1,
      direction : 'up'
    },
    eR      : -3
  },
  {
    testVal : {
      number    : -3.5,
      rounding  : 1,
      direction : 'away'
    },
    eR      : -4
  },
  {
    testVal : {
      number    : -3.5,
      rounding  : 1,
      direction : 'towards'
    },
    eR      : -3
  },
  {
    testVal : {
      number    : -3.5,
      rounding  : 1,
      direction : 'closest'
    },
    eR      : -4
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.5,
      direction : 'up'
    },
    eR      : 0.5
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.5,
      direction : 'down'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.5,
      direction : 'away'
    },
    eR      : 0.5
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.5,
      direction : 'towards'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : 0,
      rounding  : 107,
      direction : 'away'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : 1,
      rounding  : 107,
      direction : 'away'
    },
    eR      : 107
  },
  {
    testVal : {
      number    : -1,
      rounding  : 107,
      direction : 'away'
    },
    eR      : -107
  },
  {
    testVal : {
      number    : 2435,
      rounding  : 240,
      direction : 'up'
    },
    eR      : 2640
  },
  {
    testVal : {
      number    : -5.5,
      rounding  : 10,
      direction : 'down'
    },
    eR      : -10
  },
  {
    testVal : {
      number    : -9785,
      rounding  : 100000,
      direction : 'away'
    },
    eR      : -100000
  },
  {
    testVal : {
      number    : -9785,
      rounding  : 100000,
      direction : 'towards'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : -99999.999,
      rounding  : 100000,
      direction : 'towards'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : 0.34,
      rounding  : 0.1,
      direction : 'towards'
    },
    eR      : 0.3
  },
  {
    testVal : {
      number    : 0.34,
      rounding  : 0.1,
      direction : 'down'
    },
    eR      : 0.3
  },
  {
    testVal : {
      number    : 0.34,
      rounding  : 0.1,
      direction : 'closest'
    },
    eR      : 0.3
  }
];

expectedResults.map(t => describe(`completeRound(${t.testVal.number},${t.testVal.rounding},${t.testVal.direction})`,() => {
  it(`should return ${t.eR}`, () => {
    const result = completeRound(t.testVal.number,t.testVal.rounding,t.testVal.direction);
    expect(result).to.equal(t.eR);
  });
}));
