import {Component, effect, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Animal, AnimalListModel} from "../core/model";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public title = 'clean-architecture';
  public animalList = signal(this.animalListModel.getState());

  constructor(private animalListModel: AnimalListModel) {}

  public ngOnInit() {
    this.animalListModel.displayAll().subscribe((_) => {
     this.animalList.set(this.animalListModel.getState());
    }).unsubscribe();
  }

  public filterByDog(): void {
    this.animalList.update((_) => this.animalListModel.filterAnimal("Dog"));
  }

  public filterByCat(): void {
    this.animalList.update((_) => this.animalListModel.filterAnimal("Cat"));
  }

  public allAnimals(): void {
    this.animalList.update((data: Animal[]) => this.animalListModel.getState());
  }
}

