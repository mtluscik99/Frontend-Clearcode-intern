import { Board } from './+interfaces';
import { fillBoardWithZeros } from './board-zero-filler';

const board: Board = [
  [7, 7, 7, 5, 1, 7],
  [1, 8, 1, 1, 1, 4],
  [3, 2, 3, 9, 7, 6],
  [9, 9, 3, 1, 8, 7],
  [1, 9, 3, 1, 8, 7],
  [5, 9, 2, 2, 4, 8],
];

(function riddleSolver(boardGame: Board) {
  fillBoardWithZeros(board);
})(board);
