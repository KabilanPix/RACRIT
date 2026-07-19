import prisma from './src/lib/prisma';

const events = [
  {
    slug: "imposter",
    title: "IMPOSTER – Chaos. Clues. Confusion.",
    shortDescription: "Introductory gathering and ice-breaker social deduction game for the newly formed Board Members, Avenue Heads, and Green Rotaractors.",
    date: "11th July 2026 (04:00 PM – 06:00 PM)",
    category: "Club Service",
    posterImage: "/events/imposter.png",
    fullContent: `The Rotaract Club of Rajalakshmi Institute of Technology successfully organized "IMPOSTER – Chaos. Clues. Confusion." on 11th July 2026 at Anna Nagar Tower Park. The event served as the club's introductory gathering for the newly formed Board Members, Avenue Heads, and Green Rotaractors.

The session began with a formal introduction where members introduced themselves, shared their roles and responsibilities for the current Rotary year, and interacted with fellow club members. This created an open and comfortable environment for everyone, especially the newly inducted Green Rotaractors.

Following the introductions, participants took part in the interactive game "Imposter," a social deduction activity designed to encourage communication, observation, critical thinking, and teamwork. The game generated enthusiastic participation, laughter, and friendly competition, making it an excellent ice-breaker for the team.

The event concluded with casual conversations among members, strengthening bonds and fostering a sense of unity as everyone looked forward to an exciting year of service and leadership together.

**Purpose for Conducting:**
* Welcome the newly appointed Board Members and Green Rotaractors.
* Help members become familiar with one another and their respective roles.
* Strengthen fellowship within the club through interactive activities.
* Encourage teamwork, communication, and trust among members.
* Build a positive foundation for successful collaboration throughout the Rotary year.

**Outcomes of the Event:**
* Enhanced familiarity among club members and office bearers.
* Improved communication and interpersonal connections within the team.
* Fostered teamwork, leadership, and mutual understanding.
* Created an inclusive and welcoming environment for Green Rotaractors.
* Established a strong sense of unity and enthusiasm for future club initiatives.`,
    galleryPhotos: [
      "/events/imposter/gallery/imposter_photo_0.png",
      "/events/imposter/gallery/imposter_photo_1.png",
      "/events/imposter/gallery/imposter_photo_2.png",
      "/events/imposter/gallery/imposter_photo_3.png"
    ]
  },
  {
    slug: "anbudan-samayal-manamudan-valangal-2",
    title: "ANBUDAN SAMAYAL MANAMUDAN VALANGAL 2.0",
    shortDescription: "A community service initiative aimed at spreading kindness by preparing and donating biryani to children.",
    date: "13th July 2026 (12:00 PM – 03:00 PM)",
    category: "Community Service",
    posterImage: "/events/asmv.png",
    fullContent: `Anbudan Samayal, Manamudan Vazhangal 2.0 is a community service initiative organized by the Rotaract Club of Rajalakshmi Institute of Technology. As part of this project, Rotaractors prepare and donate approximately 60 kg of biryani to nearly 350 children residing in a trust/orphanage (Karunai illam perunalpet vaniyambadi).

The event is designed to go beyond food distribution by creating a warm and caring environment where volunteers interact with the children, share moments of joy, and promote the spirit of compassion and humanity. This initiative reflects the club’s commitment to meaningful service and community welfare.

**Purpose for Conducting:**
The purpose of Anbudan Samayal, Manamudan Vazhangal 2.0 is to support underprivileged children by providing them with a nutritious and fulfilling meal while spreading happiness through acts of kindness. The event encourages Rotaractors to develop empathy, teamwork, and a strong sense of social responsibility. It also aims to inspire a culture of volunteerism, strengthen community relationships, and uphold Rotary’s principle of "Service Above Self" by making a positive and lasting impact on the lives of those in need.

**Key Highlights:**
* Successfully organized Anbudan Samayal, Manamudan Vazhangal 2.0 as a community service initiative.
* Prepared and donated approximately 60 kg of biryani.
* Served a wholesome meal to around 350 children at the trust/orphanage.
* Active participation of Rotaract Club of Rajalakshmi Institute of Technology members in cooking, serving, and interacting with the children.
* Promoted the values of compassion, teamwork, and selfless service.
* Created a joyful and memorable experience for both the children and the volunteers.
* Strengthened the club’s commitment to Rotary’s motto, "Service Above Self."

**Outcomes of the Event:**
* Fostered a sense of social responsibility, empathy, and leadership among Rotaractors.
* Enhanced teamwork and coordination through collective planning and execution.
* Strengthened the relationship between the Rotaract Club and the local community/trust.
* Inspired members to actively participate in future humanitarian and community service initiatives.
* Reinforced the importance of giving back to society and making a meaningful impact through service.`,
    galleryPhotos: [
      "/events/asmv/gallery/asmv_photo_0.png",
      "/events/asmv/gallery/asmv_photo_1.png",
      "/events/asmv/gallery/asmv_photo_2.jpeg"
    ]
  }
];

async function main() {
  console.log('Seeding events database...');
  
  await prisma.event.deleteMany();

  for (const e of events) {
    await prisma.event.create({
      data: e
    });
  }

  console.log('Events seeding finished successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
