import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AnimalListModel} from "../core/model";
import {AnimalGateway} from "../core/spi";
import {FakeAsyncAnimalGateway} from "./services/FakeAsyncAnimalGateway";



export const animalListModelDemoProvider = () => {
    return {
        provide: AnimalListModel, useFactory: (animalGateway: AnimalGateway) => new AnimalListModel(animalGateway),
        deps:[FakeAsyncAnimalGateway] // this can be provided from config class to swap implementation of the interface
    }
}

export const appConfig: ApplicationConfig = {
  providers: [
      animalListModelDemoProvider(),
      provideRouter(routes),
    ]
};
