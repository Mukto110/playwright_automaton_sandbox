import { faker } from "@faker-js/faker";

export class FakeUser {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;

  constructor() {
    this.userId = faker.string.uuid();
    this.username = faker.internet.username();
    this.email = faker.internet.email();
    this.avatar = faker.image.avatar();
    this.password = faker.internet.password();
    this.birthdate = faker.date.birthdate();
    this.registeredAt = faker.date.past();
  }
}

// Some additions -->

// Add these factory functions:
// export function createRandomUser(): User {
//   return new User();
// }

// Or to create multiple random users:
// export function createRandomUsers(count: number): User[] {
//   return Array.from({ length: count }, () => new User());
// }

// Uses ->
// import { createRandomUser, createRandomUsers } from '../utilities/dataGenerator';

// Single user
// const user = createRandomUser();

// Multiple users
// const users = createRandomUsers(5);
