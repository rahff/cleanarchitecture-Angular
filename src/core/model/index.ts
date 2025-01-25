import {AnimalGateway} from "../spi";
import {first, Observable, tap} from "rxjs";
import {animalFilter} from "../use_cases";

export type Animal = {
    species: string,
    img: string,
}

export class AnimalListModel {

    private animalListState: Animal[] = [];

    constructor(private animalGateway: AnimalGateway) {}

    public displayAll(): Observable<Animal[]> {
        return this.animalGateway.getAll()
            .pipe(first(), tap(this.setState.bind(this)));
    }

    private setState(data: Animal[]): void {
        this.animalListState = data;
    }

    public getState(): Animal[] {
        return this.animalListState;
    }

    public filterAnimal(filter: string): Animal[] {
        return [...this.animalListState.filter(animalFilter(filter))]
    }
}