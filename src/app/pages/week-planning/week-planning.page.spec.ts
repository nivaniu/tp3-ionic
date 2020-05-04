import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeekPlanningPage } from './week-planning.page';

describe('WeekPlanningPage', () => {
  let component: WeekPlanningPage;
  let fixture: ComponentFixture<WeekPlanningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekPlanningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeekPlanningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
