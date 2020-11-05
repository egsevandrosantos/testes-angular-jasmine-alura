import { isUpperCase } from "./upper-case.validator";

describe("A função isUpperCase", () => {
  it("deve retornar verdadeiro caso o valor tenha letras maiúsculas", () => {
    const valor = "Gabriel";
    const resultado = isUpperCase(valor);
    expect(resultado).toBeTruthy();
  });

  it("deve retornar falso caso o valor seja todo em letras minusculas", () => {
    const valor = "gabriel";
    const resultado = isUpperCase(valor);
    expect(resultado).toBeFalsy();
  });
});
