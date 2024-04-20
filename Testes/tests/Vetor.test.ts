import {Vetor} from '../src/Vetor'

describe("Vetor", () =>{
    let vetor: Vetor;
    beforeEach(() =>{
        vetor = new Vetor();
    });
    
    it('deve adicionar valores no vetor', () => {
        expect(vetor.adicionar(4)).not.toBe(0)
    })

    it('deve somar os elementos do vetor', () =>{
        vetor.adicionar(4)
        vetor.adicionar(5)
        expect(vetor.somarVetor()).toBe(9);
    })

    it('deve buscar o maior', () => {
        vetor.adicionar(4)
        vetor.adicionar(6)
        vetor.adicionar(8)
        vetor.adicionar(10)
        expect(vetor.buscarMaior()).toBe(10)
    })

    it('deve buscar media', () => {
        vetor.adicionar(10)
        vetor.adicionar(5)
        vetor.adicionar(15)
        expect(vetor.buscarMedia()).toBe(10)
    })

})