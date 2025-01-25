import {Component, effect, OnDestroy, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Animal, AnimalListModel} from "../core/model";
import {Subscription} from "rxjs";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'clean-architecture';
  public animalList = signal(this.animalListModel.getState());
  private  subscription: Subscription = new Subscription()
  constructor(private animalListModel: AnimalListModel) {}

  public ngOnInit() {
    this.subscription = this.animalListModel.getAll().subscribe((_) => {
     this.animalList.set(this.animalListModel.getState());
    })
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

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

