export interface Character {
    nome: string;
    vida: number;
    defesa: number;
    forca: number;
}

export const validateCharacter = (input: Character): boolean => {
    if (input.nome === undefined || input.vida === undefined || input.defesa === undefined || input.forca === undefined) {
        return false;
    }
    if (input.nome === undefined || input.vida === undefined || input.defesa === undefined || input.forca === undefined) {
        return false;
    }
    
    if (input.vida <= 0 || input.defesa <= 0 || input.forca <= 0) {
        return false;
    }
    
    return true;
};

const personagem: Character = {
    nome: "Guerreiro",
    vida: 1500,
    defesa: 500,
    forca: 700
};

if (validateCharacter(personagem)) {
    console.log("Personagem válido");
} else {
    console.log("Personagem inválido");
}
