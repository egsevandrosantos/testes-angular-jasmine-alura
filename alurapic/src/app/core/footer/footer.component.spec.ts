import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";
import { FooterComponent } from "./footer.component";

describe("O componente Footer", () => {
  let footerComponent: FooterComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserService],
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    const userService = TestBed.get(UserService);
    spyOn(userService, "getUser").and.returnValue(
      of(<User>{ id: 1, name: "Alvaro", email: "alvaro@alura.com.br" })
    );
    const fixture = TestBed.createComponent(FooterComponent);
    footerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve ser instanciado", () => {
    expect(footerComponent).toBeTruthy();
  });
});
