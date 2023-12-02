import { describe, expect, test } from "bun:test";
import { readPuzzleInput } from "../utilities/utilities";
import { part1, part2 } from "./puzzle";

describe("Day 2", async () => {
  const sampleInput = await readPuzzleInput(import.meta.url, true);
  const fullInput = await readPuzzleInput(import.meta.url, false);

  describe("Part I", () => {
    test("Sample", () => expect(part1(sampleInput)).toEqual(8));
    test("Puzzle", () => expect(part1(fullInput)).toEqual(2207));
  });

  describe("Part II", () => {
    test("Sample", () => expect(part2(sampleInput)).toEqual(2286));
    test("Puzzle", () => expect(part2(fullInput)).toEqual(62241));
  });
});
