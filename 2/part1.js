// Day 2: rock paper scissors
import { readFile } from "fs/promises";
import colors from "colors";

(async () => {
  // prettier-ignore
  console.log(`Running ${process.argv.includes("--final") || process.argv.includes("-f") ? "final".bgBrightBlue : "test".bgBrightGreen}`)
  // prettier-ignore
  const input = await readFile(`./input.${process.argv.includes("--final") || process.argv.includes("-f") ? "final" : "test"}.txt`, "utf8");
  const lines = input.split("\n");

  const calculateWinner = (opp, my) => {
    // 3 for tie, 0 for loss, 6 for win
    if (opp === my) return 3;
    if (opp === "rock" && my === "scissors") return 0;
    if (opp === "rock" && my === "paper") return 6;
    if (opp === "paper" && my === "rock") return 0;
    if (opp === "paper" && my === "scissors") return 6;
    if (opp === "scissors" && my === "paper") return 0;
    if (opp === "scissors" && my === "rock") return 6;
  };

  const OPP_MAP = {
    A: "rock",
    B: "paper",
    C: "scissors",
  };
  const MY_MAP = {
    X: "rock",
    Y: "paper",
    Z: "scissors",
  };
  const MY_SCORES = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  let sum = 0;
  for (let i in lines) {
    const line = lines[i];
    const [opp, my] = line.split(" ");
    const dub = calculateWinner(OPP_MAP[opp], MY_MAP[my]);
    const weight = MY_SCORES[MY_MAP[my]];
    sum += dub + weight;
  }
  console.log(sum);
})();
