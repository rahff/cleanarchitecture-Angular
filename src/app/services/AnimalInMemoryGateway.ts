import {Observable, of} from "rxjs";
import { Animal } from "../../core/model";
import {AnimalGateway} from "../../core/spi";
import {Injectable} from "@angular/core";
import {data} from "./data";


// synchronous implementation for unit testing
@Injectable({
    providedIn: "root"
})
export class AnimalInMemoryGateway implements AnimalGateway {


    getAll(): Observable<Animal[]> {
        return of([...data])
    }

}