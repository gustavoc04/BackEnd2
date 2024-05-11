import { User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    private userDatabase: UserDatabase;

    constructor(userDatabase: UserDatabase) {
        this.userDatabase = userDatabase;
    }

    public async getUserById(id: string) {
        const user = await this.userDatabase.getUserById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole(),
        };
    }
    public async getAllUsers() {
        const users = await this.userDatabase.getAllUsers();
        if (!users || users.length === 0) {
            throw new Error("No users found");
        }

        return users.map(user => ({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole(),
        }));
    }
    public async getUserProfile(userId: string) {
        const user = await this.userDatabase.getUserById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole(),
        };
    }
}
