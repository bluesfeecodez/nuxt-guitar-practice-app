export default defineEventHandler(async (event) => {
  const user = await useDrizzle().query.users.findFirst();
  console.log("user", user);
});
