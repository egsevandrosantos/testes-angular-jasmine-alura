import { async, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AlertModule } from "src/app/shared/componets/alert/alert.module";
import { LoadingModule } from "src/app/shared/componets/loading/loading.module";
import { MenuModule } from "src/app/shared/componets/menu/menu.module";
import { User } from "../user/user";
import { UserService } from "../user/user.service";
import { HeaderComponent } from "./header.component";

describe("O componente Header", () => {
  let headerComponent: HeaderComponent,
    userService: UserService,
    router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MenuModule,
        AlertModule,
        LoadingModule,
      ],
      declarations: [HeaderComponent],
      providers: [UserService],
    }).compileComponents();
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);
    spyOn(userService, "getUser").and.returnValue(
      of(<User>{ id: 1, name: "Alvaro", email: "alvaro@alura.com.br" })
    );
    const fixture = TestBed.createComponent(HeaderComponent);
    headerComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("deve ser instanciado", () => {
    expect(headerComponent).toBeTruthy();
  });

  it("deve fazer logout", () => {
    const spy = spyOn(userService, "logout").and.returnValue(null);
    const navigateSpy = spyOn(router, "navigate");
    headerComponent.logout();
    expect(spy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith([""]);
  });
});
