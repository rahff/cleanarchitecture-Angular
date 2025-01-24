import {Observable, of} from "rxjs";
import { Animal } from "../../core/model";
import {AnimalGateway} from "../../core/spi";
import {Injectable} from "@angular/core";



@Injectable({
    providedIn: "root"
})
export class AnimalInMemoryGateway implements AnimalGateway {


    getAll(): Observable<Animal[]> {
        return of([
            {species: "Dog",
                img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
                species: "Cat",
                img: "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg"
            }
            ])
    }

}