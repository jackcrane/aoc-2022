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
  let lines = input.split("\n");

  let lineGroups = [];
  while (lines.length > 3) {
    lineGroups.push(lines.splice(0, 3));
  }
  lineGroups.push(lines);

  let total = 0;

  for (let _line in lineGroups) {
    const lineGroup = lineGroups[_line];
    const matchingLetters = [];
    for (let i = 0; i < lineGroup[0].length; i++) {
      if (
        lineGroup[1].indexOf(lineGroup[0][i]) > -1 &&
        lineGroup[2].indexOf(lineGroup[0][i]) > -1
      ) {
        matchingLetters.push(lineGroup[0][i]);
      }
    }

    const letter = [...new Set(matchingLetters)][0];
    const index = alphabet.indexOf(letter) + 1;
    console.log(letter, index);
    total += index;
  }

  console.log(total);
})();
