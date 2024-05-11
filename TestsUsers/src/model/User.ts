export class User {
   constructor(
       private id: string,
       private name: string,
       private email: string,
       private role: string
   ) {
       if (role !== 'NORMAL' && role !== 'ADMIN') {
           throw new Error('Invalid role. Role must be NORMAL or ADMIN.');
       }
   }

   public getId(): string {
       return this.id;
   }

   public getName(): string {
       return this.name;
   }

   public getEmail(): string {
       return this.email;
   }

   public getRole(): string {
       return this.role;
   }
}
