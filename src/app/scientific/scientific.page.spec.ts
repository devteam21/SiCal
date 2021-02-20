import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScientificPage } from './scientific.page';

describe('ScientificPage', () => {
  let component: ScientificPage;
  let fixture: ComponentFixture<ScientificPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScientificPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
