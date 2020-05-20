function numberOfDecimals(number: number): number {
  return Math.floor(number) === number
         ? 0
         : parseInt(number.toString().split('.')[1].length) || 0;
}

function completeRound( number: number, rounding = 1, direction = 'closest' ): number {
  let n: number = +number,
      r: number = Math.abs(+rounding),
      d: string = direction;

  let maxDecimals: number = Math.max(numberOfDecimals(n),numberOfDecimals(r));

  if (typeof n !== 'number') {
    throw new Error('You need to round a number!');
  }

  if (n === 0) {
    return 0;
  }
  if (r === 1) {
    if (d === 'down') {
      return Math.floor(number);
    }
    if (d === 'up') {
      return Math.ceil(number);
    }
  }

  const bounds = {
    lower   : Math.floor(n / r) * r,
    upper   : Math.ceil(n / r) * r,
    towards : n > 0
              ? Math.floor(n / r) * r
              : Math.ceil(n / r) * r,
    away    : n > 0
              ? Math.ceil(n / r) * r
              : Math.floor(n / r) * r
  };
  switch (d) {
    case 'down':
      return bounds.lower;
      break;
    case 'up':
      return bounds.upper;
      break;
    case 'towards':
      return bounds.towards;
      break;
    case 'away':
      return bounds.away;
      break;
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
      return c.toFixed(maxDecimals);
      break;
    default:
      throw new Error(`Please select a valid rounding direction, it should default to 'closest' but other options are 'up', 'down', 'away' [from zero] and 'towards' [zero].`);
      break;  
  }
};

export default completeRound;
