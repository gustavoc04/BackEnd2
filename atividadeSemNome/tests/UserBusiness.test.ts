import { UserBusiness } from "../src/business/UserBusiness";
import { UserMockAdmin } from "./Mocks/UserMock";


describe('UserBusiness - getUserById', () => {
    it('should throw an error when user is not found', async () => {
        const userBusiness = new UserBusiness();

        try {
            await userBusiness.getUserById('non-existent-id');
            fail('Expected an error to be thrown');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual('User not found');
        }
    });
});

describe('UserBusiness - getUserById', () => {
    it('should return user data on successful retrieval', async () => {
      const userBusiness = new UserBusiness();
  
      const retrievedUser = await userBusiness.getUserById('existing-id'); 
  
      expect(retrievedUser).toBeObject(); 
      expect(retrievedUser.id).toEqual(UserMockAdmin.getId());
      expect(retrievedUser.name).toEqual(UserMockAdmin.getName());
      expect(retrievedUser.email).toEqual(UserMockAdmin.getEmail());
      expect(retrievedUser.role).toEqual(UserMockAdmin.getRole());
      expect(UserMock.getUserById).toHaveBeenCalledTimes(1);
    });
  });