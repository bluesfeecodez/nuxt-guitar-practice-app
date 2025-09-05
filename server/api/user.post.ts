import { users } from "../database/schema";
import { UserDto } from "../utils/drizzle";
import { UserSchema } from "../../shared/types/user";
import z from "zod";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = UserSchema.safeParse(body);

  console.log("user", user);

  if (user.error) {
    return createError({
      statusCode: 500,
      statusMessage: z.prettifyError(user.error),
    });
  }

  const res = await useDrizzle()
    .insert(users)
    .values({
      password: user.data.password,
      avatar: user.data.avatar,
      createdAt: user.data.createdAt,
      email: user.data.email,
      name: user.data.name,
    })
    .returning();

  return {
    user: res,
  };
});
