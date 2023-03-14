import { User } from "../db";

export const getUsers = async () => {
  try {
    const get_user = await User.findAll();

    if (!get_user) throw new Error("Users not found");

    return get_user;
  } catch (error: any) {
    return error.message;
  }
};

export const getUserById = async (id: string) => {
  try {
    const findUser = await User.findOne({ where: { id: id } });

    return findUser;
  } catch (error: any) {
    return error.message;
  }
};
