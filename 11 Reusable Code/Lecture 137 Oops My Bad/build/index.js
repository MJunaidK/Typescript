"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
/*
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();*/
/*const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
  // new ConsoleReport()
);*/
const summary = Summary_1.Summary.winsAnalysisWithHtmlReports('Man United');
summary.buildAndPrintReport(matchReader.matches);
