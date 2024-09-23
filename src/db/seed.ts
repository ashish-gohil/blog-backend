import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed post data
  const posts = await prisma.post.createMany({
    data: [
      {
        title: "First Post",
        content: "This is the content of the first post.",
        author: "Author 1",
      },
      {
        title: "Second Post",
        content: "This is the content of the second post.",
        author: "Author 2",
      },
      {
        title: "Third Post",
        content: "This is the content of the third post.",
        author: "Author 3",
      },
    ],
  });

  console.log(`Seeded ${posts.count} posts.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
