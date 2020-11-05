import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";

describe("O serviço AuthService", () => {
  let service: AuthService,
    userService: UserService,
    httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [HttpClientModule],
      imports: [HttpClientTestingModule],
      providers: [AuthService],
      // providers: [HttpHandler, HttpClient, AuthService],
    });
    service = TestBed.get(AuthService);
    userService = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("deve ser instanciado", () => {
    expect(service).toBeTruthy();
  });

  it("deve autenticar o usuário", fakeAsync(() => {
    const fakeBody = {
      id: 1,
      nome: "Alvaro",
      email: "alvaro@alura.com.br",
    };
    const spy = spyOn(userService, "setToken").and.returnValue(null);
    const user$ = service.authenticate("Alvaro", "1234");
    user$.subscribe((response) => {
      expect(response.body).toEqual(fakeBody);
      expect(spy).toHaveBeenCalledWith("token123");
    });

    const request = httpMock.expectOne((req) => {
      return req.method === "POST";
    });
    request.flush(fakeBody, {
      headers: { "x-access-token": "token123" },
    });
    tick();
  }));
});
