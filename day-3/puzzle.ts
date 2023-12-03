import { EOL } from "os";
import { Position, Puzzle } from "../utilities/types";
import { isNeighbour, sum } from "../utilities/utilities";

const getPositions = (file: string): { numbers: Position[]; symbols: Position<string>[] } => {
  const numbers: Position[] = [];
  const symbols: Position<string>[] = [];

  for (const [row, line] of file.split(EOL).entries()) {
    const numberMatches = line.matchAll(/\d+/g);
    const symbolMatches = line.matchAll(/[^.\d]/g);

    numbers.push(...Array.from(numberMatches).map((match) => ({ row, index: match.index ?? 0, value: Number(match.at(0)) })));
    symbols.push(...Array.from(symbolMatches).map((match) => ({ row, index: match.index ?? 0, value: match[0] })));
  }

  return { numbers, symbols };
};

export const part1: Puzzle = (input) => {
  const { numbers, symbols } = getPositions(input);
  const adjacentNumbers = numbers.filter((num) => symbols.some((symbol) => isNeighbour(num, symbol)));
  return sum(adjacentNumbers.map((num) => num.value));
};

export const part2: Puzzle = (input) => {
  const { numbers, symbols } = getPositions(input);
  const starSymbols = symbols.filter((s) => s.value === "*");

  const adjacentToSymbol = starSymbols.map((symbol) => {
    return numbers.filter((number) => isNeighbour(number, symbol));
  });

  const ratios = adjacentToSymbol
    .filter((i) => i.length === 2)
    .map((item) => {
      return item.reduce((a, b) => a * b.value, 1);
    });

  return sum(ratios);
};
