// Day x: xyz
import { readFile } from "fs/promises";
import colors from "colors";

(async () => {
  // prettier-ignore
  console.log(`Running ${process.argv.includes("--final") || process.argv.includes("-f") ? "final".bgBrightBlue : "test".bgBrightGreen}`)
  // prettier-ignore
  const input = await readFile(`./input.${process.argv.includes("--final") || process.argv.includes("-f") ? "final" : "test"}.txt`, "utf8");
})();
