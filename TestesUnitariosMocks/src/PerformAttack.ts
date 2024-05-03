import { Character } from "./Character";

export const PerformAttack = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
  if (!validator(attacker) || !validator(defender)) {
      throw new Error("Personagem invalido");
  }

  const dano = attacker.forca - defender.defesa;

  if (dano > 0) {
      defender.vida = defender.vida - dano;
  }
};
