import prisma from './src/lib/prisma';

const members = [
  // CORE MEMBERS
  { name: "Rtr. Aswin Pramoth A R", role: "Immediate Past President", category: "CORE" },
  { name: "Rtr. Hari Balaji", role: "President", category: "CORE" },
  { name: "Rtr. Rupesh S", role: "Secretary", category: "CORE" },
  { name: "Rtr. Manikanta", role: "Chief Sergeant At Arms", category: "CORE" },
  { name: "Rtr. Danish Reddy", role: "Vice President", category: "CORE" },
  { name: "Rtr. Sylvia Eden", role: "Treasurer", category: "CORE" },

  // BOARD MEMBERS
  { name: "Rtr. Nishaanth", role: "Joint Secretary", category: "BOARD" },
  { name: "Rtr. Mageshwaran", role: "Deputy Sergeant At Arms", category: "BOARD" },
  { name: "Rtr. Mouleesh", role: "Club Service Director", category: "BOARD" },
  { name: "Rtr. Moksha", role: "Associate Club Service Director", category: "BOARD" },
  { name: "Rtr. Adithyaa", role: "Community Service Director", category: "BOARD" },
  { name: "Rtr. Kamesh", role: "Associate Community Service Director", category: "BOARD" },
  { name: "Rtr. Rohit", role: "Professional Service Director", category: "BOARD" },
  { name: "Rtr. Duraimurugan", role: "Associate Professional Service Director", category: "BOARD" },
  { name: "Rtr. Akshayaa", role: "International Service Director", category: "BOARD" },
  { name: "Rtr. Amrita", role: "Associate International Service Director", category: "BOARD" },
  { name: "Rtr. Manoj", role: "Multi Avenue Director", category: "BOARD" },
  { name: "Rtr. Padmavathy", role: "Associate Multi Avenue Director", category: "BOARD" },
  { name: "Rtr. Anata Reya Thabitha", role: "Public Relations Officer", category: "BOARD" },
  { name: "Rtr. Kabilan", role: "Editorial Board Head", category: "BOARD" },
  { name: "Rtr. Mugesh", role: "Creatives & Designing Head", category: "BOARD" },
  { name: "Rtr. Aishwarya", role: "Content Creation Head", category: "BOARD" },
  { name: "Rtr. Vaishnavi", role: "Pro Team", category: "BOARD" },
  { name: "Rtr. Taara sri", role: "Editorial Team", category: "BOARD" },
  { name: "Rtr. Sanjay", role: "Associate Treasurer", category: "BOARD" },
  { name: "Rtr. Joshvua", role: "Chief Employment Cell", category: "BOARD" },
  { name: "Rtr. Naveen", role: "Discipline Head", category: "BOARD" },
  { name: "Rtr. Satyanarayanaa", role: "Event Coordinator", category: "BOARD" }
];

async function main() {
  console.log('Seeding database with updated members list...');
  
  // Clear existing members
  await prisma.member.deleteMany();

  // Insert updated members
  for (const m of members) {
    await prisma.member.create({
      data: m
    });
  }

  console.log('Database seeding finished successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
