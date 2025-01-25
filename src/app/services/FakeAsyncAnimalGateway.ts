import {Injectable} from "@angular/core";
import {AnimalGateway} from "../../core/spi";
import {Observable} from "rxjs";
import {Animal} from "../../core/model";
import {data} from "./data";



// Asynchronous implementation for component testing
@Injectable({
    providedIn: "root"
})
export class FakeAsyncAnimalGateway implements AnimalGateway {


    getAll(): Observable<Animal[]> {
        return new Observable((subscriber) => {
            setTimeout(() => subscriber.next(data), 200)
        })
    }

}