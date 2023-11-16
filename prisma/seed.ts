import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      username: "Isha",
      email: "isha@gmail.com",
      phone: "9898786787",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      username: "John",
      email: "john@gmail.com",
      phone: "1234567890",
    },
  });

  const user3 = await prisma.user.upsert({
    where: { id: 3 },
    update: {},
    create: {
      username: "Emma",
      email: "emma@gmail.com",
      phone: "9876543210",
    },
  });

  console.log({ user1, user2, user3 });
}


main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
