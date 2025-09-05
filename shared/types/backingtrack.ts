import z from "zod";

export const BackingTrackSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1),
  url: z.url(),
  key: z.string().optional(),
});
