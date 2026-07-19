import prisma from './src/lib/prisma';

const boardMembers = [
  { name: "Rtr. Hari Balaji", role: "President" },
  { name: "Rtr. Rupesh", role: "Secretary" },
  { name: "Rtr. Manikanta", role: "Chief Sergeant At Arms" },
  { name: "Rtr. Sylvia Eden", role: "Vice President" },
  { name: "Rtr. Nishaanth", role: "Joint Secretary" },
  { name: "Rtr. Magesh", role: "Deputy Sergeant At Arms" },
  { name: "Rtr. Danish Reddy", role: "Club Service Director" },
  { name: "Rtr. RKG", role: "Associate Club Service Director" },
  { name: "Rtr. Adithyaa", role: "Community Service Director" },
  { name: "Rtr. Kamesh", role: "Associate Community Service Director" },
  { name: "Rtr. Rohit", role: "Professional Service Director" },
  { name: "Rtr. Duraimurugan", role: "Associate Professioanl Service Director" },
  { name: "Rtr. Akshaya", role: "International Service Director" },
  { name: "Rtr. Amrita", role: "Associate International Service Director" },
  { name: "Rtr. Manoj", role: "Multi Avenue Director" },
  { name: "Rtr. Padma", role: "Associate Multi Avenue Director" },
  { name: "Rtr. Anata Reya Thabitha", role: "Public Relations Officer" },
  { name: "Rtr. Kabilan", role: "Editorial Board Head" },
  { name: "Rtr. Mugesh", role: "Creatives & Designing Head" },
  { name: "Rtr. Vaishnavi", role: "Pro Team" },
  { name: "Rtr. Taara sri", role: "Treasurer" },
  { name: "Rtr. Sanjay", role: "Associate Treasurer" },
  { name: "Rtr. Joshvua", role: "Chief Employment Cell" },
  { name: "Rtr. Mouleesh", role: "Photography Head" },
];

const greenRotaractors = [
  { name: "Rtr. Bhuvanesh", role: "Green Rotractor" },
  { name: "Rtr. Ananya", role: "Green Rotractor" },
];

const teamMembers = [
  {
    name: "[President Name]",
    role: "President — Leading the club's vision and direction",
  },
  {
    name: "[Secretary Name]",
    role: "Secretary — Managing club operations and records",
  },
  {
    name: "[Treasurer Name]",
    role: "Treasurer — Overseeing club finances and budgeting",
  },
  {
    name: "[Joint Secretary Name]",
    role: "Joint Secretary — Supporting event execution and reporting",
  },
];

async function main() {
  console.log('Seeding database...');
  
  // Clear existing
  await prisma.member.deleteMany();

  // Insert board members
  for (const m of boardMembers) {
    await prisma.member.create({
      data: {
        name: m.name,
        role: m.role,
        category: "BOARD",
      }
    });
  }

  // Insert green rotaractors
  for (const m of greenRotaractors) {
    await prisma.member.create({
      data: {
        name: m.name,
        role: m.role,
        category: "GREEN_ROTARACTOR",
      }
    });
  }

  // Insert team placeholder members
  for (const m of teamMembers) {
    await prisma.member.create({
      data: {
        name: m.name,
        role: m.role,
        category: "TEAM_PLACEHOLDER",
      }
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
