import { Jewel } from './+interfaces';

export const MINIMAL_JEWELS_NUMBER = 3;

export function getIndexesOfJewelsSequence(jewels: Jewel[]): number[] {
  const numberOfJewels = jewels.length;
  if (numberOfJewels === 0) return [];

  let repeatedIndexes: number[] = [];
  let sameJewelCounter: number = 1;

  jewels.reduce((previousJewel, currentJewel, currentJewelIndex) => {
    const isTheSameTypeOfJewel = previousJewel === currentJewel;
    const isLastJewel = currentJewelIndex === numberOfJewels - 1;
    const doesSequenceEnd = !isTheSameTypeOfJewel || isLastJewel;
    const doesJewelsEndWithSequence = isLastJewel && isTheSameTypeOfJewel;

    if (isTheSameTypeOfJewel) sameJewelCounter++;

    if (doesSequenceEnd) {
      const isValidSequence = sameJewelCounter >= MINIMAL_JEWELS_NUMBER;

      if (isValidSequence) {
        const startFrom = doesJewelsEndWithSequence
          ? currentJewelIndex
          : currentJewelIndex - 1;
        const previousIndexes = getPreviousIndexes(startFrom, sameJewelCounter);

        repeatedIndexes = repeatedIndexes.concat(previousIndexes);
      }

      sameJewelCounter = 1;
    }

    return currentJewel;
  });

  return repeatedIndexes;
}

function getPreviousIndexes(
  startFrom: number,
  howManyIndexes: number,
): number[] {
  return [...Array(howManyIndexes).keys()].map((i) => startFrom - i);
}
