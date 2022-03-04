import { MatchReader } from "./inheritance/MatchReader";
import { MatchResult } from "./MatchResults";

const reader = new MatchReader("football.csv");
reader.read();


/* const MatchResult = {
  awayWin: "A",
  homeWin: "H",
  draw: "D",
}; */
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] == MatchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games`);
