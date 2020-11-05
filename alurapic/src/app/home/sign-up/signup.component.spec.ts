import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { VMessageModule } from "src/app/shared/componets/vmessage/vmessage.module";
import { SignUpComponent } from "./signup.component";
import { SignUpService } from "./signup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";

describe("O formulário Signup", () => {
  let signupComponent: SignUpComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        VMessageModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [SignUpComponent],
      providers: [SignUpService, UserNotTakenValidatorService],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(SignUpComponent);
    signupComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve ser instanciado", () => {
    expect(signupComponent).toBeTruthy();
  });
});
