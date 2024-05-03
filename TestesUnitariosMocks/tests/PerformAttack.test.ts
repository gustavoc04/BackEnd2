import { PerformAttack } from "../src/PerformAttack";
import { Character } from "../src/Character";

describe("testando o comportamento de luta", () => {
  
  const mockSimularPersonagemValido = jest.fn(() => true);
  const mockSimularPersonagemInvalido = jest.fn(() => false);

  let attacker: Character;
  let defender: Character;

  beforeEach(() => {
    attacker = {
      nome: "jefim",
      vida: 1350,
      defesa: 380,
      forca: 570,
    };

    defender = {
      nome: "junim",
      vida: 1200,
      defesa: 550,
      forca: 390,
    };
  });
  
  it("deve retornar true para o comportamento valido", () => {
  PerformAttack(attacker, defender, mockSimularPersonagemValido);  
  expect(mockSimularPersonagemValido).toHaveBeenCalledTimes(2);
    expect(mockSimularPersonagemValido).toHaveBeenCalledWith(attacker && defender);
  });

  it("deve retornar false para o comportamento invalido", () => {
    expect(() => PerformAttack(attacker, defender, mockSimularPersonagemInvalido)).toThrow("Personagem invalido");
    expect(mockSimularPersonagemInvalido).toHaveBeenCalledTimes(1);
    expect(mockSimularPersonagemInvalido).toHaveBeenCalledWith(attacker);
  });
});
