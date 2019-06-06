import { Jewel, Board } from '../+interfaces';
import {
  fillSequenceWithZeros,
  fillBoardWithZeros,
} from '../board-zero-filler';

describe(`::fillSequenceWithZeros`, () => {
  it(`should return array filled with zeros on given indexes`, () => {
    const mockedSequence: Jewel[] = [1, 2, 2, 2, 3];
    const mockedIndexes: Jewel[] = [1, 2, 3];
    const mockedResponse: Jewel[] = [1, 0, 0, 0, 3];

    expect(fillSequenceWithZeros(mockedSequence, mockedIndexes)).toEqual(
      mockedResponse,
    );
  });

  it(`should return the same array when there are no indexes`, () => {
    const mockedSequence: Jewel[] = [1, 4, 1, 2, 3];
    const mockedIndexes: Jewel[] = [];

    expect(fillSequenceWithZeros(mockedSequence, mockedIndexes)).toEqual(
      mockedSequence,
    );
  });

  it(`should return array filled with zeros on all indexes`, () => {
    const mockedSequence: Jewel[] = [2, 2, 2, 2, 3, 3, 3];
    const mockedIndexes: Jewel[] = [0, 1, 2, 3, 4, 5, 6];
    const mockedResponse: Jewel[] = [0, 0, 0, 0, 0, 0, 0];

    expect(fillSequenceWithZeros(mockedSequence, mockedIndexes)).toEqual(
      mockedResponse,
    );
  });
});

describe(`::fillBoardWithZeros`, () => {
  it(`should return board filled with zeros both in column and in row`, () => {
    const mockBoard: Board = [[1, 1, 1], [1, 2, 1], [1, 4, 2]];
    const mockResponse: Board = [[0, 0, 0], [0, 2, 1], [0, 4, 2]];

    expect(fillBoardWithZeros(mockBoard)).toEqual(mockResponse);
  });

  it(`should return the same board when there are not sequences`, () => {
    const mockBoard: Board = [[1, 2, 1], [3, 2, 1], [1, 4, 2]];

    expect(fillBoardWithZeros(mockBoard)).toEqual(mockBoard);
  });
});
