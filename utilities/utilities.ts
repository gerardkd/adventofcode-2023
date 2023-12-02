import { fileURLToPath } from "node:url";
import { EOL } from "os";

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
