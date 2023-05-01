"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader_1.CSVFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface.
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport()
// new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);
