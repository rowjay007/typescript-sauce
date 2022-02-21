import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";

/* const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); */

const charactersCollection = new CharactersCollection("Saerf");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
