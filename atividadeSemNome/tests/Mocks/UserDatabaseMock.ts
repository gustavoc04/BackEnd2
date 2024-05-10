import { User } from "../../src/model/User";
import { UserMockAdmin, UserMockNormal } from "./UserMock";

export class UserDatabaseMock {
    public async createUser(user: User): Promise<void> { }

    public async getUserById(id: string): Promise<User | undefined> {
        if (id === 'id_mockado') {
            return UserMockNormal
        } else if (id === 'id_mockado2') {
            return UserMockAdmin
        } else {
            undefined
        }
    }
    public async getUserByEmail(email: string): Promise<User | undefined> {
        if (email === 'email@normal.com') {
            return UserMockNormal
        } else if (email === 'email@admin.com') {
            return UserMockAdmin
        } else {
            undefined
        }
    }
    public async getAllUsers(): Promise<User[]> {
        return [UserMockNormal, UserMockAdmin]
    }
}