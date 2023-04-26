import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollections } from './CharactersCollections';
import { LinkedList } from './LinkedList';

/*const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);*/

/*const characterCollections = new CharacterCollections('Xaayb');
const sorter = new Sorter(characterCollections);
sorter.sort();
console.log(characterCollections.data);*/

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
