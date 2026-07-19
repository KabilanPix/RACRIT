import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const coreMembersList = [
    { name: "Rtr. Hari Balaji", role: "President" },
    { name: "Rtr. Rupesh", role: "Secretary" },
    { name: "Rtr. Manikanta", role: "Chief Sergeant At Arms" },
    { name: "Rtr. Sylvia Eden", role: "Vice President" },
    { name: "Rtr. Taara sri", role: "Treasurer" }
  ];

  for (const member of coreMembersList) {
    await prisma.member.updateMany({
      where: {
        name: member.name,
        role: member.role,
        category: "BOARD"
      },
      data: {
        category: "CORE"
      }
    });
    console.log(`Updated ${member.name} to CORE`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
