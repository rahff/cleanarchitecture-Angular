import {Animal} from "../model";

export const animalFilter = (filter: string) => (animalList: Animal[]): Animal[] => animalList.filter(bySpecies(filter));

const bySpecies = (species: string) => (animal: Animal) => sameSpecie(animal.species, species);

const sameSpecie = (specie: string, other: string) => specie === other;