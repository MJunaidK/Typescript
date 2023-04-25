"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollections_1 = require("./CharactersCollections");
/*const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);*/
const characterCollections = new CharactersCollections_1.CharacterCollections('Xaayb');
const sorter = new Sorter_1.Sorter(characterCollections);
sorter.sort();
console.log(characterCollections.data);
