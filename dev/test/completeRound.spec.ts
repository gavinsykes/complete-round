import completeRound from '../src/completeRound';
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
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.4325,
      direction : 'up'
    },
    eR      : 0.4325
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.4325,
      direction : 'down'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.4325,
      direction : 'away'
    },
    eR      : 0.4325
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.4325,
      direction : 'towards'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : 0.1,
      rounding  : 0.4325,
      direction : 'closest'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : 0.21625,
      rounding  : 0.4325,
      direction : 'closest'
    },
    eR      : 0.4325
  },
  {
    testVal : {
      number    : 0.2162499999,
      rounding  : 0.4325,
      direction : 'closest'
    },
    eR      : 0
  },
  {
    testVal : {
      number    : 0.21625000001,
      rounding  : 0.4325,
      direction : 'closest'
    },
    eR      : 0.4325
  },
  {
    testVal : {
      number    : 5,
      rounding  : 10,
      direction : 'closest',
      offset    : 7
    },
    eR      : 7
  },
  {
    testVal : {
      number    : 5,
      rounding  : 10,
      direction : 'up',
      offset    : 7
    },
    eR      : 7
  },
  {
    testVal : {
      number    : 5,
      rounding  : 10,
      direction : 'down',
      offset    : 7
    },
    eR      : -3
  },
  {
    testVal : {
      number    : 5,
      rounding  : 10,
      direction : 'away',
      offset    : 7
    },
    eR      : 7
  },
  {
    testVal : {
      number    : 5,
      rounding  : 10,
      direction : 'towards',
      offset    : 7
    },
    eR      : -3
  },
  {
    testVal : {
      number    : -7,
      rounding  : -9,
      direction : 'closest',
      offset    : -3
    },
    eR      : -3
  },
  {
    testVal : {
      number    : -7,
      rounding  : -9,
      direction : 'up',
      offset    : -3
    },
    eR      : -3
  },
  {
    testVal : {
      number    : -7,
      rounding  : -9,
      direction : 'down',
      offset    : -3
    },
    eR      : -12
  },
  {
    testVal : {
      number    : -7,
      rounding  : -9,
      direction : 'away',
      offset    : -3
    },
    eR      : -12
  },
  {
    testVal : {
      number    : -7,
      rounding  : -9,
      direction : 'towards',
      offset    : -3
    },
    eR      : -3
  },
  {
    testVal : {
      number    : -0.45,
      rounding  : 0.7,
      direction : 'closest',
      offset    : 0.034
    },
    eR      : -0.666
  },
  {
    testVal : {
      number    : -0.45,
      rounding  : 0.7,
      direction : 'up',
      offset    : 0.034
    },
    eR      : 0.034
  },
  {
    testVal : {
      number    : -0.45,
      rounding  : 0.7,
      direction : 'down',
      offset    : 0.034
    },
    eR      : -0.666
  },
  {
    testVal : {
      number    : -0.45,
      rounding  : 0.7,
      direction : 'away',
      offset    : 0.034
    },
    eR      : -0.666
  },
  {
    testVal : {
      number    : -0.45,
      rounding  : 0.7,
      direction : 'towards',
      offset    : 0.034
    },
    eR      : 0.034
  }
];

const testRoundArray: unknown = [5];

expect(() => completeRound(testRoundArray as number)).to.throw(TypeError, /a number/);
expect(() => completeRound(5,1,'arriba')).to.throw(Error, /valid rounding direction/);
expect(() => completeRound(5,0)).to.throw(Error, /nearest 0/);

expectedResults.map(t => describe(`completeRound(${t.testVal.number}, ${t.testVal.rounding}, '${t.testVal.direction}', ${t.testVal.offset})`,() => {
  it(`should return ${t.eR}`, () => {
    const result = completeRound(t.testVal.number,t.testVal.rounding,t.testVal.direction,t.testVal.offset);
    expect(result).to.equal(t.eR);
  });
}));
