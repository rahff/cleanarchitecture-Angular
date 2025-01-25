import {Observable, of} from "rxjs";
import { Animal } from "../model";
import {AnimalGateway} from "./index";
import {data} from "../../app/services/data";


// synchronous implementation for unit testing
export class AnimalInMemoryGateway implements AnimalGateway {

    getAll(): Observable<Animal[]> {
        return of([...data])
    }

}