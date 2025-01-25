import {Component, effect, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Animal, AnimalListModel} from "../core/model";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {animate} from "@angular/animations";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public title = 'clean-architecture';
  public animalList = signal(this.animalListModel.getState())

  constructor(private animalListModel: AnimalListModel) {}

  public ngOnInit() {
    this.animalListModel.displayAll().subscribe((data) => {
      this.animalList.set(data)
    }).unsubscribe()
  }

  public filterByDog(): void {
    this.animalList.update((data: Animal[]) => this.animalListModel.filterAnimal("Dog"))
  }

  public filterByCat(): void {
    this.animalList.update((data: Animal[]) => this.animalListModel.filterAnimal("Cat"))
  }

  public allAnimals(): void {
    this.animalList.update((data: Animal[]) => this.animalListModel.getState())
  }
}

