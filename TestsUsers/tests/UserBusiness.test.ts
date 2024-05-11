import { UserBusiness } from "../src/business/UserBusiness"
import { CustomError } from "../src/erros/CustomError"
import { UserDatabaseMock } from "./Mocks/UserDatabaseMock"
import { UserMockAdmin, UserMockNormal } from "./Mocks/UserMock"

const userDatabaseMock = new UserDatabaseMock()
const userBusinessMock = new UserBusiness(userDatabaseMock)

describe('teste getUserById', () => {
    test('Erro de usuario nao existente', async () => {
        try {
            await userBusinessMock.getUserById('idNaoExistente')
        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("User not found")
                expect(error.statusCode).toEqual(404)
            }
        }
    })

    test('Resposta de sucesso', async () => {
        jest.spyOn(userDatabaseMock, 'getUserById').mockResolvedValueOnce(UserMockAdmin)
        const result = await userBusinessMock.getUserById('id-admin-123')
        expect(userDatabaseMock.getUserById).toHaveBeenCalledWith('id-admin-123')
        expect(result).toEqual(UserMockAdmin)
    })
})

describe('teste getAllUsers', () => {
    test('Erro de nao autorizado', async () => {
        jest.spyOn(userDatabaseMock, 'getAllUsers').mockResolvedValueOnce([UserMockNormal])
        try {
            await userBusinessMock.getAllUsers()
        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Unauthorized")
            }
        }
    })

    test('Resposta de sucesso', async () => {
        const users = [
            {"id": "id-admin-123", "name": "rubens", "email": "rubens@gmail.com", "role": "ADMIN"},
            {"id": "id-normal-123", "name": "junim", "email": "junim@gmail.com", "role": "NORMAL"}
        ]
        
        jest.spyOn(UserMockAdmin, 'getRole').mockReturnValueOnce('ADMIN')

        const result = await userBusinessMock.getAllUsers()
        expect(userDatabaseMock.getAllUsers).toHaveBeenCalled()

        expect(result).toEqual(expect.arrayContaining(users))
    })   
})
describe('teste getUserProfile', () => {
    test('Erro de usuario nao encontrado', async () => {
        try {
            await userBusinessMock.getUserProfile('idNaoExistente')
        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("User not found")
                expect(error.statusCode).toEqual(404)
            }
        }
    })

    test('Resposta de sucesso ao encontrar o perfil do proprio usuario', async () => {
        jest.spyOn(userDatabaseMock, 'getUserProfile').mockResolvedValueOnce(UserMockNormal)
        const result = await userBusinessMock.getUserProfile('id-normal-123')
        expect(result).toEqual(UserMockNormal)
    })
})


