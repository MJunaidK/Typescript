import { CSVFileReader } from './CSVFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CSVFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
