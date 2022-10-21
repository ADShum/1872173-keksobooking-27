function getRandomInteger(min, max, round = 1) {
  if (!min || !max) {
    return;
  }

  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const num = Math.random() * (upper - lower) + lower;
  return num.toFixed(round);
}


