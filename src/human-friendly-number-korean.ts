const KOREAN_NUMBER_COUNTING_PLACE = [
  '',
  '일',
  '이',
  '삼',
  '사',
  '오',
  '육',
  '칠',
  '팔',
  '구',
];

const KOREAN_NUMBER_THOUSANDS_PLACE = [
  '',
  '만',
  '억',
  '조',
  '경',
  '해',
  '자',
  '양',
  '구',
  '간',
  '정',
  '재',
  '극',
];

const KOREAN_NUMBER_SUB_THOUSANDS_PLACE = [
  '',
  '십',
  '백',
  '천',
];

export function getNumberPlaceBetween(
  input: number,
  i: number,
  step: number,
): number {
  return Math.floor(input / Math.pow(step, i) % step);
}

export function formatNumberHumanFriendlyKorean(input: number): string {
  if (input < 1) {
    return '';
  }
  const totalSteps = Math.floor(Math.log(input) / Math.log(10000)) + 1;
  const result = [];
  for (let i = 0; i < totalSteps; i++) {
    // Pluck sub-unit places with upper/lower bounds stripped.
    // e.g. 12,'345',000 -> 345 (1)
    const subThousandsPlace = getNumberPlaceBetween(input, i, 10000);
    // Ignore the whole round if it results in zero.
    if (subThousandsPlace < 1) {
      continue;
    }
    result.unshift(KOREAN_NUMBER_THOUSANDS_PLACE[i]);
    // Calculate the total number of iterations that should be by taking
    // log10(x), lower bound capped at 1.
    const totalSubThousandsPlaces = Math.floor(Math.log10(subThousandsPlace)) + 1;
    for (let j = 0; j < totalSubThousandsPlaces; j++) {
      const num = getNumberPlaceBetween(subThousandsPlace, j, 10);
      if (num < 1) {
        continue;
      }
      result.unshift(`${KOREAN_NUMBER_COUNTING_PLACE[num]}${KOREAN_NUMBER_SUB_THOUSANDS_PLACE[j]}`);
    }
  }
  return result.join('');
}
