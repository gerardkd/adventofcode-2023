import { Puzzle } from "../utilities/types";
import { readLine } from "../utilities/utilities";

const getFirstAndLastNumber = (value: string): number => {
  const match = value.replaceAll(/[^0-9]/g, "");

  if (!match) {
    return 0;
  }

  return +`${match[0]}${match[match.length - 1]}`;
};

export const part1: Puzzle = (input) => {
  let result = 0;

  readLine(input, (line) => {
    result += getFirstAndLastNumber(line);
  });

  return result;
};

const replacements = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const replaceNumberStrings = (input: string): string => {
  for (const [i, value] of replacements.entries()) {
    input = input.replaceAll(value, `${value}${i + 1}${value}`);
  }

  return input;
};

export const part2: Puzzle = (input) => {
  let result = 0;

  readLine(input, (line) => {
    result += getFirstAndLastNumber(replaceNumberStrings(line));
  });

  return result;
};
