import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  email: z.email(),
  password: z.string().min(6),
  avatar: z.string().min(1),
  createdAt: z.date().default(new Date()),
});
