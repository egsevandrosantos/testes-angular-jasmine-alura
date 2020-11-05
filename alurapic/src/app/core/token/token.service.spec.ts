import { TokenService } from "./token.service";

describe("O serviço TokenService", () => {
  let token: string, service: TokenService;

  beforeEach(() => {
    token = "token123";
    service = new TokenService();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("deve ser instanciado", () => {
    expect(service).toBeTruthy();
  });

  it("guarda o token", () => {
    service.setToken(token);
    const existeToken = service.hasToken();
    const tokenSalvo = service.getToken();
    expect(existeToken).toBeTruthy();
    expect(tokenSalvo).toBe("token123");
  });

  it("remove o token", () => {
    service.setToken(token);
    service.removeToken();
    const existeToken = service.hasToken();
    const tokenSalvo = service.getToken();
    expect(existeToken).toBeFalsy();
    expect(tokenSalvo).toBeFalsy();
  });
});
