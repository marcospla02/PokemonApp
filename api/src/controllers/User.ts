import { UserInt } from "../assets/interfaces";
import { User } from "../db";

export const createUser = async (props: UserInt) => {
  try {
    const { name, favorites, email, id } = props;

    const newUser = await User.create({
      id: id,
      name: name,
      favorites: favorites,
      email: email,
    });
    newUser.save();
    return newUser;
  } catch (error: any) {
    return error.message;
  }
};

// UPDATE USER.

export const updateUser = async (favorites: any, id: string) => {
  try {
    console.log("soy favorites:", favorites);

    const update_user = await User.update(
      { favorites: favorites },
      { where: { id: id } }
    );

    if (update_user[0] === 0) return "Error in update";
    return { message: "successfully updated" };
  } catch (error: any) {
    return error.message;
  }
};
