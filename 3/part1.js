// Day 3: Rucksack Reorganization
import { readFile } from "fs/promises";
import colors from "colors";

const isUpper = (char) => char === char.toUpperCase();
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

(async () => {
  // prettier-ignore
  console.log(`Running ${process.argv.includes("--final") || process.argv.includes("-f") ? "final".bgBrightBlue : "test".bgBrightGreen}`)
  // prettier-ignore
  const input = await readFile(`./input.${process.argv.includes("--final") || process.argv.includes("-f") ? "final" : "test"}.txt`, "utf8");
  const lines = input.split("\n");

  const total = 0;

  for (let _line in lines) {
    const line = lines[_line];
    const compartment1 = line.substring(0, line.length / 2);
    const compartment2 = line.substring(line.length / 2);
    const matchingLetters = [];
    for (let i = 0; i < compartment1.length; i++) {
      if (compartment2.indexOf(compartment1[i]) > -1) {
        matchingLetters.push(compartment1[i]);
      }
    }
    const letter = [...new Set(matchingLetters)][0];
    const index = alphabet.indexOf(letter) + 1;
    const number = console.log(line, letter, index);
    total += index;
  }

  console.log(total);
})();
