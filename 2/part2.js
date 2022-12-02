// Day 2: rock paper scissors
import { readFile } from "fs/promises";
import colors from "colors";

(async () => {
  // prettier-ignore
  console.log(`Running ${process.argv.includes("--final") || process.argv.includes("-f") ? "final".bgBrightBlue : "test".bgBrightGreen}`)
  // prettier-ignore
  const input = await readFile(`./input.${process.argv.includes("--final") || process.argv.includes("-f") ? "final" : "test"}.txt`, "utf8");
  const lines = input.split("\n");

  const neededForWin = (opp) => {
    if (opp === "rock") return "paper";
    if (opp === "paper") return "scissors";
    if (opp === "scissors") return "rock";
  };
  const neededForLoss = (opp) => {
    if (opp === "rock") return "scissors";
    if (opp === "paper") return "rock";
    if (opp === "scissors") return "paper";
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
  const MY_MAP_INV = {
    rock: "X",
    paper: "Y",
    scissors: "Z",
  };
  const MY_SCORES = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };
  const OUTCOME_MAP = {
    X: "loss",
    Y: "tie",
    Z: "win",
  };
  const OPP_TO_MY = {
    A: "X",
    B: "Y",
    C: "Z",
  };

  let sum = 0;
  for (let i in lines) {
    const line = lines[i];
    const [opp, out] = line.split(" ");

    let my = "";
    let dub = 0;
    if (OUTCOME_MAP[out] === "tie") {
      my = OPP_TO_MY[opp];
      dub = 3;
    } else if (OUTCOME_MAP[out] === "win") {
      my = MY_MAP_INV[neededForWin(OPP_MAP[opp])];
      dub = 6;
    } else if (OUTCOME_MAP[out] === "loss") {
      my = MY_MAP_INV[neededForLoss(OPP_MAP[opp])];
      dub = 0;
    }
    const weight = MY_SCORES[MY_MAP[my]];
    sum += dub + weight;
  }
  console.log(sum);
})();
