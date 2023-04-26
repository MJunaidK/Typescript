import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollections } from './CharactersCollections';

/*const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);*/

const characterCollections = new CharacterCollections('Xaayb');
const sorter = new Sorter(characterCollections);
sorter.sort();
console.log(characterCollections.data);
