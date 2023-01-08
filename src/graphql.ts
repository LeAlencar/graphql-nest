/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    email: string;
    name: string;
}

export class UpdateUserInput {
    id: number;
    email?: Nullable<string>;
    name?: Nullable<string>;
}

export class User {
    id: number;
    email: string;
    name: string;
}

export class ReturnedUser {
    user?: Nullable<User>;
    success?: Nullable<string>;
    error?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): ReturnedUser | Promise<ReturnedUser>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): ReturnedUser | Promise<ReturnedUser>;

    abstract updateUser(input: UpdateUserInput): ReturnedUser | Promise<ReturnedUser>;

    abstract deleteUser(id: number): User | Promise<User>;
}

type Nullable<T> = T | null;
