import { Character, validateCharacter } from "../src/Character";

describe("Character", () => {
    let personagem: Character;

    beforeEach(() => {
        personagem = {
            nome: "",
            vida: 100,
            defesa: 10,
            forca: 8
        };
    });

    it('deve retornar false para nome vazio', () =>{
        expect(validateCharacter(personagem)).toBe(false);
    });

    it('deve retornar false para vida igual a zero', () =>{
        personagem.vida = 0;
        expect(validateCharacter(personagem)).toBe(false);
    });

    it('deve retornar false para força igual a zero', () =>{
        personagem.forca = 0;
        expect(validateCharacter(personagem)).toBe(false);
    });

    it('deve retornar false para defesa igual a zero', () =>{
        personagem.defesa = 0;
        expect(validateCharacter(personagem)).toBe(false);
    });

    it('deve retornar false para vida força ou defesa com valor negativo', () =>{
        personagem.vida = -145;
        expect(validateCharacter(personagem)).toBe(false);

        personagem.vida = 150;
        personagem.forca = -10;
        expect(validateCharacter(personagem)).toBe(false);

        personagem.forca = 50;
        personagem.defesa = -13;
        expect(validateCharacter(personagem)).toBe(false);
    });

    it('deve retornar true para informacoes validas do personagem', () =>{
        personagem.nome = "jefim";
        personagem.vida = 250;
        personagem.defesa = 12;
        personagem.forca = 32;
        expect(validateCharacter(personagem)).toBe(true);
    });
});
