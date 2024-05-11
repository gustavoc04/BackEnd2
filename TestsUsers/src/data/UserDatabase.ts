import { User } from "../model/User";

export class UserDatabase {
    public users: User[];

    constructor() {
        this.users = [
            new User("id-admin-123", "rubens", "rubens@gmail.com", 'ADMIN'),
            new User("id-normal-123", "junim", "junim@gmail.com", 'NORMAL'),
        ];
    }

    public async getUserById(id: string): Promise<User | undefined> {
        return this.users.find(user => user.getId() === id);
    }

    public async getAllUsers(): Promise<User[]> {
        return this.users;
    }

    public async getUserProfile(id: string): Promise<User | undefined> {
        return this.users.find(user => user.getId() === id);
    }
}
