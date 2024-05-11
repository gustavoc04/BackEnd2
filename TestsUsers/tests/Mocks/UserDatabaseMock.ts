import { User } from "../../src/model/User";
import { UserMockAdmin, UserMockNormal } from "./UserMock";

export class UserDatabaseMock {
    public users: User[] = [
        new User("id-admin-123", "rubens", "rubens@gmail.com", 'ADMIN'),
        new User("id-normal-123", "junim", "junim@gmail.com", 'NORMAL'),
    ];

    public async getUserById(id: string): Promise<User | undefined> {
        if (id === UserMockNormal.getId()) {
            return UserMockNormal;
        } else if (id === UserMockAdmin.getId()) {
            return UserMockAdmin;
        } else {
            return undefined;
        }
    }

    public async getAllUsers(): Promise<User[]> {
        return [UserMockNormal, UserMockAdmin];
    }

    public async getUserProfile(id: string): Promise<User | undefined> {
        return this.users.find(user => user.getId() === id);
    }
}
