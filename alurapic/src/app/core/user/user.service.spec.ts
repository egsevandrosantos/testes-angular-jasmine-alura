import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";

describe("O serviço UserService", () => {
  let service: UserService, token: string;

  beforeEach(() => {
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTYwNDQ5NzcyOCwiZXhwIjoxNjA0NTg0MTI4fQ.1IgpJ3WnqeJq3uFjn3UGAG4M0kdeDulVCx2IwApEoBs";
    TestBed.configureTestingModule({
      providers: [UserService],
    });
    service = TestBed.get(UserService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("deve ser instanciado", () => {
    expect(service).toBeTruthy();
  });

  it("deve recuperar as informações do usuário", () => {
    service.setToken(token);
    const logado = service.isLogged();
    const userName = service.getUserName();
    const user$ = service.getUser();
    expect(logado).toBeTruthy();
    expect(userName).toBe("flavio");
    user$.subscribe((user) => {
      expect(user && user.name).toBe("flavio");
    });
  });

  it("deve limpar as informações no logout", () => {
    service.setToken(token);
    service.logout();
    const logado = service.isLogged();
    const userName = service.getUserName();
    const user$ = service.getUser();
    expect(logado).toBeFalsy();
    expect(userName).toBeFalsy();
    user$.subscribe((user) => {
      expect(user && user.name).toBeFalsy();
    });
  });
});
