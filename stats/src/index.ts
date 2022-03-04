import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
 
const csvFileReader = new CsvFileReader('football.csv')


const matchReader = new MatchReader(csvFileReader)
matchReader.load()



const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport
)

summary.buildAndPrintReport(matchReader.matches)