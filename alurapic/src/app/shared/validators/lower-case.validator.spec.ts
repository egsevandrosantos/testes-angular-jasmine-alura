import { isLowerCase } from "./lower-case.validator";

describe("A função isLowerCase", () => {
  it("deve confirmar quando recebe um texto em caixa baixa", () => {
    const valor = "mario";
    const resultado = isLowerCase(valor);
    expect(resultado).toBeTruthy();
  });

  it("deve validar quando recebe um texto em caixa alta", () => {
    const valor = "Mario";
    const resultado = isLowerCase(valor);
    expect(resultado).toBeFalsy();
  });
});
