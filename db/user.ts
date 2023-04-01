// deno-lint-ignore-file
import type { User, UserForCreation, UserForUpdate } from "../types/user.ts";
import { v1 } from "../deps.ts";

let users: User[] = [];

export const getAllUsers = async () => {
  return users;
};

export const findUserById = async (uuid: string) => {
  let userFound = users.find((user) => user.uuid === uuid);
  console.log("userFound =>", userFound);

  if (!userFound) {
    throw new Error("User not found");
  } else {
    return userFound;
  }
};

export const deleteById = async (uuid: string) => {
  const usersFiltered = users.filter((user) => user.uuid !== uuid);
  users = usersFiltered;
  if (!usersFiltered) {
    throw new Error("User not found");
  } else {
    return usersFiltered;
  }
};

export const createUser = (user: UserForCreation): User => {
  users.push({
    uuid: v1.generate().toString(),
    name: user.name,
    birthDate: user.birthDate,
  });
  return {
    uuid: v1.generate().toString(),
    name: user.name,
    birthDate: user.birthDate,
  };
};

/*  Aqui me quede  */

export const updateUser = (
  users: User[],
  uuid: string,
  userForUpdate: Partial<User>
): User[] {
  const hola =  users.map((user) => {
    if(user.uuid === uuid) {
      return {...user, ...userForUpdate};
    }else{
      return user
    }
  });

};

export const updateUser = (
  users: any,
  uuid: string,
  userForUpdate: Partial<User>
): User => {
  const usersMap = users.map((user) => {
    if (user.uuid === uuid) {
      return { ...users, ...userForUpdate };
    } else {
      //devolver bien
      return {
        uuid: v1.generate().toString(),
        name: "asdasd",
        birthDate: new Date(),
      };
    }
  });
};
