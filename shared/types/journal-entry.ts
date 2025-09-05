import z from "zod";

export const JournalEntrySchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1),
  url: z.url(),
  key: z.string().optional(),
  userId: z.number().min(1),
  backingtackId: z.number().min(1),
});
