import { Board } from './+interfaces';

export function getMatrixInverse(matrix: Board): Board {
  const columnAmount = matrix[0].length;
  const columnIndexes = range(columnAmount);

  return columnIndexes.map((index) => matrix.map((row) => row[index]));
}

function range(upTo: number): number[] {
  return [...Array(upTo).keys()];
}
