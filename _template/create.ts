import * as fs from "fs/promises";

const files = ["puzzle.ts", "puzzle.test.ts", "input.txt", "input_sample.txt"];

process.stdout.write("Day to create (number): ");

for await (const day of console) {
  const dirToCreate = `./day-${day}/`;

  if (await fs.exists(dirToCreate)) {
    process.stdout.write(`Day folder already exists\n`);
    process.exit(0);
  }

  await fs.mkdir(dirToCreate);

  process.stdout.write(`Writing ${files.length} files...\n`);

  for (const file of files) {
    const content = Bun.file(`./_template/${file}`);
    await Bun.write(`${dirToCreate}/${file}`, content);
  }

  process.stdout.write(`Day ${day} created. Happy coding! 🚀\n`);
  process.exit(0);
}

export {};
