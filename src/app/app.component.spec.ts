import {ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {catList, data} from "./services/data";
import {animalListModelDemoProvider} from "./app.config";


describe('AppComponent', () => {
  let app: AppComponent
  let fixture: ComponentFixture<AppComponent>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [animalListModelDemoProvider()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })
  afterEach(() => app.ngOnDestroy());

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should display list of animal`, fakeAsync(()=> {
    app.ngOnInit();
    tick(200);
    expect(app.animalList()).toEqual([...data])
  }))

  it(`should filter list of animal`, fakeAsync(()=> {
    app.ngOnInit();
    tick(200);
    app.filterByCat();
    expect(app.animalList()).toEqual(catList)
  }))

});
