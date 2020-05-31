/**
 * @author Gavin Sykes <gavin@gavinsykes.uk> (https://gavinsykes.uk/) [@gavinsykes_uk](https://twitter.com/gavinsykes_uk)
 * @license MIT
 */

/**
 * numberOfDecimals takes a number as its argument.
 *
 * The return value is the number of decimal places it has.
 *
 * @param {number} number - the number that you wish to determine how many decimal places it has
 *
 * @returns {number} The number of decimal places
 */
function numberOfDecimals(number: number): number {
  return Math.floor(+number) === +number
         ? 0
         : number.toString().split('.')[1].length;
}

/**
 * completeRound takes a number as its argument.
 *
 * The return value is that number, rounded according to the given parameters.
 *
 * @param {number} number - the number that you wish to round
 *
 * @param {number} [rounding = 1] - the accuracy to which you wish to round the number
 *
 * @param {string} [direction = 'closest'] - the direction in which you wish to round the number
 *
 * @param {number} [offset = 0] - the offset that you wish to apply to the number line
 *
 * @returns {number} The rounded number
 *
 * @throws Will throw a type error if the value to round is not a number.
 *
 * @throws Will throw an error if argument direction is not 'closest', 'up', 'down', 'away', or 'towards'.
 */
function completeRound( number: number, rounding = 1, direction = 'closest', offset = 0 ): number {
  let n: number = +number,
      r: number = Math.abs(+rounding),
      d: string = direction,
      o: number = +offset;

  if (typeof n !== 'number') {
    throw new TypeError('You need to round a number!');
  }

  let maxDecimals: number = Math.max(numberOfDecimals(r),numberOfDecimals(o));

  if (n === o) {
    return n;
  }
  if (r === 1 && o === Math.floor(o)) {
    if (d === 'down') {
      return Math.floor(number);
    }
    if (d === 'up') {
      return Math.ceil(number);
    }
  }

  const bounds = {
    lower   : Math.floor((n - o) / r) * r + o,
    upper   : Math.ceil((n - o) / r) * r + o,
    towards : n > 0
              ? Math.floor((n - o) / r) * r + o
              : Math.ceil((n - o) / r) * r + o,
    away    : n > 0
              ? Math.ceil((n - o) / r) * r + o
              : Math.floor((n - o) / r) * r + o
  };
  switch (d) {
    case 'down':
      return Number(bounds.lower.toFixed(maxDecimals));
    case 'up':
      return Number(bounds.upper.toFixed(maxDecimals));
    case 'towards':
      return Number(bounds.towards.toFixed(maxDecimals));
    case 'away':
      return Number(bounds.away.toFixed(maxDecimals));
    case 'closest':
      let c: number = bounds.upper;
      if (n < 0) {
        if (n - bounds.upper <= bounds.lower - n) {
          c = bounds.lower;
        }
      }
      if (n - bounds.lower < bounds.upper - n) {
        c = bounds.lower;
      }
      return Number(c.toFixed(maxDecimals));
    default:
      throw new Error(`Please select a valid rounding direction, it should default to 'closest' but other options are 'up', 'down', 'away' [from zero] and 'towards' [zero].`);
  }
};

export default completeRound;
