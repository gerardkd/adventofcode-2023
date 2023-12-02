import { Puzzle } from "../utilities/types";
import { readLine } from "../utilities/utilities";

const maxCubes = new Map([
  ["red", 12],
  ["green", 13],
  ["blue", 14]
]);

const playGame = (instructions: string): { withinMaxCubes: boolean; id: number; power: () => number } => {
  const [gameName, roundString] = instructions.split(": ");
  const rounds = roundString.split(";");
  const cubes = new Map<string, number>();

  let withinMaxCubes = true;

  for (const round of rounds) {
    const grabs = round.split(",");

    for (const grab of grabs) {
      const [countStr, color] = grab.trim().split(" ");
      const count = Number(countStr);

      if (Number(cubes.get(color) ?? 0) < count) {
        cubes.set(color, count);
      }

      withinMaxCubes &&= (maxCubes.get(color) ?? 0) >= count;
    }
  }

  return {
    withinMaxCubes,
    id: Number(gameName.replace("Game ", "")),
    power: () => Array.from(cubes.values()).reduce((a, b) => a * b, 1)
  };
};

export const part1: Puzzle = (file) => {
  let result = 0;

  readLine(file, (line) => {
    const gameResult = playGame(line);
    result += gameResult.withinMaxCubes ? gameResult.id : 0;
  });

  return result;
};

export const part2: Puzzle = (file) => {
  let result = 0;

  readLine(file, (line) => {
    result += playGame(line).power();
  });

  return result;
};
