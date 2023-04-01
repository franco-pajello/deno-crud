// deno-lint-ignore-file
import { Context, helpers } from "../deps.ts";
import type { User, UserForUpdate, UserForCreation } from "../types/user.ts";
import * as db from "../db/user.ts";

export const getAllUsers = async (ctx: Context) => {
  try {
    const users = await db.getAllUsers();
    ctx.response.status = 200;
    ctx.response.body = {
      success: "get ✅",
      users: users,
    };
    return users;
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};

export const findUser = async (ctx: Context) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });

  try {
    const user: User = await db.findUserById(userId);
    ctx.response.status = 200;
    ctx.response.body = {
      success: "found ✅",
      user: user,
    };
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};

export const deleteById = async (ctx: Context) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });

  try {
    const usersFiltered = await db.deleteById(userId);
    ctx.response.status = 200;
    ctx.response.body = {
      success: "deleted ✅",
      currentUsers: usersFiltered,
    };
  } catch (error) {
    ctx.response.status = 404;
    ctx.response.body = { msg: error.message };
  }
};

export const deleteUser = async (ctx: Context) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });

  try {
    const user: User = await db.findUserById(userId);
    ctx.response.status = 200;
    ctx.response.body = {
      success: "deleted ✅",
      user: user,
    };
  } catch (err) {
    ctx.response.status = 404;
    ctx.response.body = { msg: err.message };
  }
};

export const createUser = async (ctx: Context) => {
  try {
    const { name, birthDate } = await ctx.request.body().value;
    const createdUser: UserForCreation = db.createUser({
      name,
      birthDate ,
    });
    ctx.response.status = 201;
    ctx.response.body = {
      success: "created ✅",
      user: createdUser,
    };
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};

