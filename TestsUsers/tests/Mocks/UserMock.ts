import { User } from "../../src/model/User"

export const UserMockAdmin = new User(
    "id-admin-123",
    "rubens",
    "rubens@gmail.com",
    "ADMIN"
)
export const UserMockNormal = new User(
    "id-normal-123",
    "junim",
    "junim@gmail.com",
    "NORMAL"
)

