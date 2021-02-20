import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StandardPage } from './standard.page';

describe('StandardPage', () => {
  let component: StandardPage;
  let fixture: ComponentFixture<StandardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
