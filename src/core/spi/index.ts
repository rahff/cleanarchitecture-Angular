import {Observable} from "rxjs";
import { Animal } from "../model";


export interface AnimalGateway {
    getAll(): Observable<Animal[]>
}