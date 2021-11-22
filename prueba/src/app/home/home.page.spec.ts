import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule} from '@angular/common/http/testing';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, HttpClientTestingModule],
      providers:[]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sendData false', () => {
    expect(component.sendData()).toBeDefined();
  }); 

  it('sendData true', () => {
    component.valueForm.get('email').setValue('asdf@gmail.com');
    component.valueForm.get('pass').setValue('asdfg');
    component.valueForm.get('rm').setValue(false);
    expect(component.sendData()).toBeDefined();
  }); 

  it('validForm', () => {
    expect(component.validForm()).toBeUndefined();
  });

  it('rememberData', () => {
    component.valueForm.get('rm').setValue(true);
    expect(component.rememberData()).toBeUndefined();
  });

  it('rememberData', () => {
    component.valueForm.get('rm').setValue(false);
    expect(component.rememberData()).toBeUndefined();
  });

  it('notLogin true', () => {
    expect(component.notLogin(true)).toBeUndefined();
  });

  it('notLogin false', () => {
    expect(component.notLogin(true)).toBeUndefined();
  });

  it('alertLogBad', () => {
    expect(component.alertLogBad()).toBeDefined();
  });

  it('alertApiserverBad', () => {
    expect(component.alertApiserverBad()).toBeDefined();
  });

  it('alertDataEmpty', () => {
    expect(component.alertDataEmpty()).toBeDefined();
  });

  it('alertLogin', () => {
    expect(component.alertDataEmpty()).toBeDefined();
  });


});
