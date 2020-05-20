function numberOfDecimals(number: number): number {
  return Math.floor(+number) === +number
         ? 0
         : number.toString().split('.')[1].length;
}

function completeRound( number: number, rounding = 1, direction = 'closest', offset = 0 ): number {
  let n: number = +number,
      r: number = Math.abs(+rounding),
      d: string = direction,
      o: number = offset;

  let maxDecimals: number = Math.max(numberOfDecimals(n),numberOfDecimals(r));

  if (typeof n !== 'number') {
    throw new Error('You need to round a number!');
  }

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
      break;
    case 'up':
      return Number(bounds.upper.toFixed(maxDecimals));
      break;
    case 'towards':
      return Number(bounds.towards.toFixed(maxDecimals));
      break;
    case 'away':
      return Number(bounds.away.toFixed(maxDecimals));
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
      return Number(c.toFixed(maxDecimals));
      break;
    default:
      throw new Error(`Please select a valid rounding direction, it should default to 'closest' but other options are 'up', 'down', 'away' [from zero] and 'towards' [zero].`);
      break;  
  }
};

export default completeRound;
