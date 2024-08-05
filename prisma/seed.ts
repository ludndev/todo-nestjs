import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'ludndev@gmail.com',
      password: 'password', // this is not my real password :)
    },
  });

  console.log({ user });

  // create two dummy todos
  const todo1 = await prisma.todo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      content: 'todo1',
      status: true,
    },
  });

  const todo2 = await prisma.todo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      content: 'todo2',
      status: false,
    },
  });

  console.log({ todo1, todo2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
