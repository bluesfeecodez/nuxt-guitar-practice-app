export default defineEventHandler(async (event) => {
  const users = await useDrizzle().query.users.findMany();
  return {
    users: users,
  };
});
