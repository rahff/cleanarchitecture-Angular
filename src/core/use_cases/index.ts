import {Animal} from "../model";

export const animalFilter = (filter: string) => (animal: Animal) => animal.species === filter;