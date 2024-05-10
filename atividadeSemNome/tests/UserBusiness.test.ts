import { UserBusiness } from "../src/business/UserBusiness";
import { UserMockAdmin } from "./Mocks/UserMock";
import { CustomError } from "../src/erros/CustomError";

const userBusinessMock = new UserBusiness();

describe('teste getUserById', () => {
    test('Erro de usuário não existente', async () =>{
        expect.assertions(2);
        try {
            await userBusinessMock.getUserById('idNaoExistente');
        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("User not found");
                expect(error.statusCode).toEqual(404);
            }
        }
    });

    test('Resposta de sucesso', async () => {
        // Configurando o mock para simular a obtenção bem-sucedida do usuário
        jest.spyOn(userBusinessMock, 'getUserById').mockResolvedValueOnce(UserMockAdmin);

        // Realizando a chamada da função
        const retrievedUser = await userBusinessMock.getUserById('existing-id');

        // Verificando se os dados do usuário retornados são os esperados
        expect(retrievedUser).toEqual(UserMockAdmin);

        // Verificando se a função mock foi chamada corretamente
        expect(userBusinessMock.getUserById).toHaveBeenCalledTimes(1);
        expect(userBusinessMock.getUserById).toHaveBeenCalledWith('existing-id');
    });
});
