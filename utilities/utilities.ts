import { fileURLToPath } from "node:url";
import { EOL } from "os";
import { Position } from "./types";

/**
 * Read the input.txt file and returns it as a string
 * @param path {string} path to the file
 * @param sample {boolean} read the sample input instead of the puzzle input
 */
export const readPuzzleInput = async (path: string, sample = false) => {
  const file = Bun.file(fileURLToPath(new URL(sample ? "input_sample.txt" : "input.txt", path)));
  return await file.text();
};

/**
 * Read input file per line
 * @param file the file contents to read
 * @param callback the function to run on each line
 */
export const readLine = (file: string, callback: (line: string, index: number, arr: any[]) => void) => {
  file.split(EOL).forEach(callback);
};

/**
 * Sum up list of numbers
 */
export const sum = (list: number[]) => list.reduce((a, b) => a + b, 0);

/**
 * Multiply a list of numbers
 */
export const multiply = (list: number[]) => list.reduce((a, b) => a * b, 1);

/**
 * checks if B is adjacent to A in a matrix
 */
export const isNeighbour = (a: Position<string | number>, b: Position<string | number>) => {
  const maxIndex = a.index + (typeof a.value === "number" ? a.value.toString().length : a.value.length);

  return (
    // Y should be right above or below source
    (b.row === a.row || b.row === a.row - 1 || b.row === a.row + 1) &&
    // X should be within range of value (+ 1 on both sides)
    b.index >= a.index - 1 &&
    b.index <= maxIndex
  );
};
