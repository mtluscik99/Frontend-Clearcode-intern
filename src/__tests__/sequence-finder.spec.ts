import { getIndexesOfJewelsSequence } from '../sequence-finder';
import { Jewel } from '../+interfaces';

describe(`::getRepeatedJewelsIndexes`, () => {
  it(`should return empty set when given array is empty`, () => {
    const mockedJewels: Jewel[] = [];
    const mockedResponse: Jewel[] = [];

    expect(getIndexesOfJewelsSequence(mockedJewels).sort()).toMatchObject(
      mockedResponse,
    );
  });

  it(`should return empty set when given array has no repeated sequences`, () => {
    const mockedJewels: Jewel[] = [1, 2, 3, 4, 5, 6, 7];
    const mockedResponse: Jewel[] = [];

    expect(getIndexesOfJewelsSequence(mockedJewels).sort()).toMatchObject(
      mockedResponse,
    );
  });

  it(`should return proper indexes when given array contains one repeated sequence`, () => {
    const mockedJewels: Jewel[] = [5, 6, 6, 6, 6, 5];
    const mockedResponse: Jewel[] = [1, 2, 3, 4];

    expect(getIndexesOfJewelsSequence(mockedJewels).sort()).toMatchObject(
      mockedResponse,
    );
  });

  it(`should return proper indexes when given array contains only one repeated sequence greater than minimal repetitions`, () => {
    const mockedJewels: Jewel[] = [6, 6, 6, 6];
    const mockedResponse: Jewel[] = [0, 1, 2, 3];

    expect(getIndexesOfJewelsSequence(mockedJewels).sort()).toMatchObject(
      mockedResponse,
    );
  });

  it(`should return proper indexes when given array contains only one repeated sequence equal minimal repetitions`, () => {
    const mockedJewels: Jewel[] = [6, 6, 6];
    const mockedResponse: Jewel[] = [0, 1, 2];

    expect(getIndexesOfJewelsSequence(mockedJewels).sort()).toMatchObject(
      mockedResponse,
    );
  });

  it(`should return proper indexes when given arrays contains two repeated sequences`, () => {
    const mockedJewels: Jewel[] = [5, 5, 5, 6, 6, 6];
    const mockedResponse: Jewel[] = [0, 1, 2, 3, 4, 5];

    expect(getIndexesOfJewelsSequence(mockedJewels).sort()).toMatchObject(
      mockedResponse,
    );
  });
});
