import { describe, expect, test } from "bun:test";
import { readInput } from "../utilities/utilities";
import { part1, part2 } from "./puzzle";

describe("Part I", () => {
  test("Sample", () => {
    const target = 0;
    const result = part1(readInput(import.meta.url, true));

    expect(result).toEqual(target);
  });

  test("Puzzle", () => {
    const target = 0;
    const result = part1(readInput(import.meta.url, false));

    expect(result).toEqual(target);
  });
});

describe("Part II", () => {
  test("Sample", () => {
    const target = 0;
    const result = part2(readInput(import.meta.url, true));

    expect(result).toEqual(target);
  });

  test("Puzzle", () => {
    const target = 0;
    const result = part2(readInput(import.meta.url, false));

    expect(result).toEqual(target);
  });
});
