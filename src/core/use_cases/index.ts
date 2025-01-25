import {Animal} from "../model";

export const animalFilter = (filter: string) =>
    (animalList: Animal[]): Animal[] =>
    animalList.filter(bySpecies(filter));

const bySpecies = (species: string) => (animal: Animal) => animal.species === species