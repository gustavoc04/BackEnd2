export interface Character {
    nome: string;
    vida: number;
    defesa: number;
    forca: number;
}

export const validateCharacter = (input: Character): boolean => {
    if (!input.nome || !input.vida || !input.defesa || !input.forca) {
        return false;
    }
    
    if (input.vida <= 0 || input.defesa <= 0 || input.forca <= 0) {
        return false;
    }
    
    return true;
};


