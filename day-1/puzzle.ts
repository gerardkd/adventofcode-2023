import { Puzzle } from "../utilities/types";
import { readLine } from "../utilities/utilities";

const numbersFromString = (value: string): number => {
  const match = value.replaceAll(/[^0-9]/g, "");

  if (!match) {
    return 0;
  }

  return +`${match[0]}${match[match.length - 1]}`;
};

export const part1: Puzzle = (input) => {
  let result = 0;

  readLine(input, (value: string) => {
    result += numbersFromString(value);
  });

  return result;
};

const replacements = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const replacer = (input: string): string => {
  for (const [i, value] of replacements.entries()) {
    input = input.replaceAll(value, `${value}${i + 1}${value}`);
  }

  return input;
};

export const part2: Puzzle = (input) => {
  let result = 0;

  readLine(input, (value: string) => {
    const replacedValue = replacer(value);
    result += numbersFromString(replacedValue);
  });

  return result;
};
