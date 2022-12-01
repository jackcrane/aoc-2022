// Day 1: Counting Calories
import { readFile } from "fs/promises";
import colors from "colors";

(async () => {
  // prettier-ignore
  console.log(`Running ${process.argv.includes("--final") || process.argv.includes("-f") ? "final".bgBrightBlue : "test".bgBrightGreen}`)
  // prettier-ignore
  const input = await readFile(`./input.${process.argv.includes("--final") || process.argv.includes("-f") ? "final" : "test"}.txt`, "utf8");

  const elves = input.split("\n\n");
  let calories = elves.map((elf, i) => {
    const snacks = elf.split("\n");
    const total = snacks.reduce((a, b) => parseInt(a) + parseInt(b));
    return total;
  });
  const maxCalories = Math.max(...calories);
  console.log(maxCalories);
})();
