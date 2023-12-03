export type Puzzle<T = number> = (input: string) => T;

export type Position<T = number> = {
  row: number;
  index: number;
  value: T;
};
