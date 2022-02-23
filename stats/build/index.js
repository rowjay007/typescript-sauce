"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
//enum -enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["awayWin"] = "A";
    MatchResult["homeWin"] = "H";
    MatchResult["draw"] = "D";
})(MatchResult || (MatchResult = {}));
/* const MatchResult = {
  awayWin: "A",
  homeWin: "H",
  draw: "D",
}; */
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] == MatchResult.homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.awayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
