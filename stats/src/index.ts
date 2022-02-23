import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });
const MatchResult = {
  awayWin: "A",
  homeWin: "H",
  draw: "D",
};
let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] == MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games`);
