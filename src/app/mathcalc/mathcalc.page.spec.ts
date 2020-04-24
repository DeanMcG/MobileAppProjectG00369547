import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathcalcPage } from './mathcalc.page';

describe('MathcalcPage', () => {
  let component: MathcalcPage;
  let fixture: ComponentFixture<MathcalcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathcalcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathcalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
