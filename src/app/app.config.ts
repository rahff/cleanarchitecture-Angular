import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AnimalListModel} from "../core/model";
import {AnimalGateway} from "../core/spi";
import {AnimalInMemoryGateway} from "./services/AnimalInMemoryGateway";


export const appConfig: ApplicationConfig = {
  providers: [
      {
          provide: AnimalListModel, useFactory: (animalGateway: AnimalGateway) => new AnimalListModel(animalGateway),
          deps:[AnimalInMemoryGateway] // this can be provided from config class to swap implementation of the interface
      },
      provideRouter(routes),
    ]
};
