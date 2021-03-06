complete-round
==============

![npm](https://img.shields.io/npm/v/complete-round)
![Travis (.com)](https://img.shields.io/travis/com/gavinsykes/complete-round)
[![codecov](https://codecov.io/gh/gavinsykes/complete-round/branch/master/graph/badge.svg)](https://codecov.io/gh/gavinsykes/complete-round)
![npm](https://img.shields.io/npm/dm/complete-round)
![GitHub top language](https://img.shields.io/github/languages/top/gavinsykes/complete-round)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gavinsykes/complete-round)
![NPM](https://img.shields.io/npm/l/complete-round)

## A function to offer more rounding options for numbers in JavaScript and TypeScript

### Function purposes:
- Offer the same functionality as Math.round()
- Allow the user to specify a different rounding accuracy (round to the nearest 10 or 100 for example)
   - _Default: 1_
- Allow the user to specify the direction in which to round
   - Closest (_default_) (the only option offered by Math.round())
   - Up
   - Down
   - Away from 0
   - Towards 0
- allow the user to specify an offset
   - _Default: 0_
- **NEW** allow supression of error reporting (_not recommended in production!_)
   - _Default: false_

### Installation

`npm install complete-round`

`<script src="https://unpkg.com/complete-round"></script>`

### Usage

completeRound(number[, rounding[, direction[, offset[, supressErrors]]]]);

- rounding defaults to 1

   Must always be a number
- direction defaults to 'closest'

   Must be one of `closest`, `up`, `down`, `away` (from 0) or `towards` (0)

   - `up` will always move up the number line, for positive numbers this will be away from 0 and for negative numbers it will be towards 0.
   - `down` will always move down the number line, for positive numbers this will be towards 0 and for negative numbers it will be away from 0.
   - `away` will always move away from 0, for positive numbers this has the effect of rounding up and for negative numbers it has the effect of rounding down.
   - `towards` will always move towards 0, for positive numbers this has the effect of rounding down and for negative numbers it has the effect of rounding up.
- offset defaults to 0

   Must always be a number

   - This is useful, for example, if you want to round a number to the nearest number that ends in 7 (7, 17, 27 etc.), you would set the rounding to 10 and set the offset to 7. Be careful however, as this example will result in any negative numbers being rounded to the nearest number ending in 3.
- supressErrors defaults to false

   Must be a boolean

   - **CARE NEEDED** - this will, by definition, not report any errors, and, if such an error occurs, it will only return the number it was given to round.

### Passing tests

completeRound(3.5, 1, 'down')

✔️ should return 3

completeRound(3.5, 1, 'up')

✔️ should return 4

completeRound(3.5, 1, 'away')

✔️ should return 4

completeRound(3.5, 1, 'towards')

✔️ should return 3

completeRound(3.5, 1, 'closest')

✔️ should return 4

completeRound(-3.5, 1, 'down')

✔️ should return -4

completeRound(-3.5, 1, 'up')

✔️ should return -3

completeRound(-3.5, 1, 'away')

✔️ should return -4

completeRound(-3.5, 1, 'towards')

✔️ should return -3

completeRound(-3.5, 1, 'closest')

✔️ should return -4

completeRound(0.1, 0.5, 'up')

✔️ should return 0.5

completeRound(0.1, 0.5, 'down')

✔️ should return 0

completeRound(0.1, 0.5, 'away')

✔️ should return 0.5

completeRound(0.1, 0.5, 'towards')

✔️ should return 0

completeRound(0, 107, 'away')

✔️ should return 0

completeRound(1, 107, 'away')

✔️ should return 107

completeRound(-1, 107, 'away')

✔️ should return -107

completeRound(2435, 240, 'up')

✔️ should return 2640

completeRound(-5.5, 10, 'down')

✔️ should return -10

completeRound(-9785, 100000, 'away')

✔️ should return -100000

completeRound(-9785, 100000, 'towards')

✔️ should return 0

completeRound(-99999.999, 100000, 'towards')

✔️ should return 0

completeRound(0.34, 0.1, 'towards')

✔️ should return 0.3

completeRound(0.34, 0.1, 'down')

✔️ should return 0.3

completeRound(0.34, 0.1, 'closest')

✔️ should return 0.3

completeRound(0.1, 0.4325, 'up')

✔️ should return 0.4325

completeRound(0.1, 0.4325, 'down')

✔️ should return 0

completeRound(0.1, 0.4325, 'away')

✔️ should return 0.4325

completeRound(0.1, 0.4325, 'towards')

✔️ should return 0

completeRound(0.1, 0.4325, 'closest')

✔️ should return 0

completeRound(0.21625, 0.4325, 'closest')

✔️ should return 0.4325

completeRound(0.2162499999, 0.4325, 'closest')

✔️ should return 0

completeRound(0.21625000001, 0.4325, 'closest')

✔️ should return 0.4325

completeRound(5, 10, 'closest', 7)

✔️ should return 7

completeRound(5, 10, 'up', 7)

✔️ should return 7

completeRound(5, 10, 'down', 7)

✔️ should return -3

completeRound(5, 10, 'away', 7)

✔️ should return 7

completeRound(5, 10, 'towards', 7)

✔️ should return -3

completeRound(-7, -9, 'closest', -3)

✔️ should return -3

completeRound(-7, -9, 'up', -3)

✔️ should return -3

completeRound(-7, -9, 'down', -3)

✔️ should return -12

completeRound(-7, -9, 'away', -3)

✔️ should return -12

completeRound(-7, -9, 'towards', -3)

✔️ should return -3

completeRound(-0.45, 0.7, 'closest', 0.034)

✔️ should return -0.666

completeRound(-0.45, 0.7, 'up', 0.034)

✔️ should return 0.034

completeRound(-0.45, 0.7, 'down', 0.034)

✔️ should return -0.666

completeRound(-0.45, 0.7, 'away', 0.034)

✔️ should return -0.666

completeRound(-0.45, 0.7, 'towards', 0.034)

✔️ should return 0.034

completeRound(-0.45, 0, 'towards', 0.034, true)

✔️ should return -0.45

completeRound(-0.45, 0.7, 'arriba', 0.034, true)

✔️ should return -0.45
