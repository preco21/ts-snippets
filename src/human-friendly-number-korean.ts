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
  return Math.floor(input / (step ** i) % step);
}

export function formatNumberHumanFriendlyKorean(input: number): string {
  const totalSteps = Math.ceil(Math.log(input) / Math.log(10000));
  const str = [];
  for (let i = 0; i < totalSteps; i++) {
    str.unshift(KOREAN_NUMBER_THOUSANDS_PLACE[i]);
    // Pluck sub-unit places with upper/lower bounds stripped.
    // e.g. 12,'345',000 -> 345 (1)
    const subThousandsPlace = getNumberPlaceBetween(input, i, 10000);
    // Calculate the total number of iterations that should be by taking
    // log10(x), lower bound capped at 1.
    const totalSubThousandsPlaces = Math.max(Math.ceil(Math.log10(subThousandsPlace)), 1);
    for (let j = 0; j < totalSubThousandsPlaces; j++) {
      const num = getNumberPlaceBetween(subThousandsPlace, j, 10);
      str.unshift(`${KOREAN_NUMBER_COUNTING_PLACE[num]}${KOREAN_NUMBER_SUB_THOUSANDS_PLACE[j]}`);
    }
  }
  return str.join('');
}
