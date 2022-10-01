import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must return invalid form if only the email is submitted', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const form = app.formLogin;
    const email = app.formLogin.controls['email']
    email.setValue('joan31000@gmail.com');
    expect(form.invalid).toBeTrue();
  });

  it('must return invalid form if only the password is submitted', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const form = app.formLogin;
    const password = app.formLogin.controls['password']
    password.setValue('12345');
    expect(form.invalid).toBeTrue();
  });

  it('must return a valid form if all fields are filled in.', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()
    const form = app.formLogin;
    const email = app.formLogin.controls['email'];
    const password = app.formLogin.controls['password'];
    email.setValue('joan31000@gmail.com');
    password.setValue('12345678');
    expect(form.invalid).toBeFalse();
  });
});
