import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

/*const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
  // new ConsoleReport()
);*/

const summary = Summary.winsAnalysisWithHtmlReports('Man United');

summary.buildAndPrintReport(matchReader.matches);
