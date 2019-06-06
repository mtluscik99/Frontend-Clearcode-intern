import { Jewel, Board } from './+interfaces';
import { getIndexesOfJewelsSequence } from './sequence-finder';
import { getMatrixInverse } from './+utils';

export function fillSequenceWithZeros(
  jewels: Jewel[],
  indexes: number[],
): Jewel[] {
  const jewelsCopy = [...jewels];
  indexes.forEach((index) => (jewelsCopy[index] = 0));

  return jewelsCopy;
}

export function fillBoardWithZeros(board: Board): Board {
  const rowSequenceIndexes = board.map(getIndexesOfJewelsSequence);
  const columnSequenceIndexes = getMatrixInverse(board).map(
    getIndexesOfJewelsSequence,
  );

  const boardWithPopulatedZerosInRows = board.map((row, rowIndex) =>
    fillSequenceWithZeros(row, rowSequenceIndexes[rowIndex]),
  );

  const boardWithPopulatedZerosInColumns = getMatrixInverse(
    boardWithPopulatedZerosInRows,
  ).map((column, columnIndex) =>
    fillSequenceWithZeros(column, columnSequenceIndexes[columnIndex]),
  );

  return getMatrixInverse(boardWithPopulatedZerosInColumns);
}
