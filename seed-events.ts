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
  },
  {
    slug: "punnagai",
    title: "PUNNAGAI – Spreading Smiles & Celebrating Inclusion",
    shortDescription: "A community service initiative aimed at bringing joy and inclusion to children with disabilities through interactive play and engagement.",
    date: "17th July 2026 (11:00 AM – 02:00 PM)",
    category: "Community Service",
    posterImage: "/events/punnagai.png",
    fullContent: `PUNNAGAI is a community service initiative organized by the Rotaract Club of Rajalakshmi Institute of Technology at the Open House Centre, Kilpauk, Chennai. The project was dedicated to bringing joy, companionship, and a sense of belonging to children with disabilities.

Volunteers spent quality time with the children, organizing fun and inclusive activities such as games, singing, dancing, and creative interactions tailored to their abilities. Beyond entertainment, the initiative focused on emotional connection, ensuring that every child felt valued, respected, and included.

The event served as a reminder of the power of empathy and the importance of creating supportive spaces for differently-abled individuals in society. For the volunteers, it was a deeply fulfilling and transformative experience, reinforcing the spirit of selfless service and social responsibility.

**Purpose for Conducting:**
* Bring joy, happiness, and companionship to children with disabilities.
* Promote inclusivity, empathy, and social awareness among college youth.
* Create a loving, supportive, and engaging environment for underprivileged children.
* Uphold Rotary’s ethos of "Service Above Self" by making a tangible difference in the community.
* Encourage young Rotaractors to participate actively in meaningful community service.

**Outcomes of the Event:**
* Brought radiant smiles and memorable moments to the children at the Open House Centre.
* Sensitized club members to the needs and challenges of differently-abled children.
* Strengthened the club's bond with community organizations and childcare trusts.
* Fostered leadership, compassion, and teamwork among the organizing team.`,
    galleryPhotos: [
      "/events/punnagai/gallery/punnagai_extracted_0.png",
      "/events/punnagai/gallery/punnagai_extracted_1.png",
      "/events/punnagai/gallery/punnagai_extracted_2.png",
      "/events/punnagai/gallery/punnagai_extracted_3.png",
      "/events/punnagai/gallery/punnagai_extracted_4.png",
      "/events/punnagai/gallery/punnagai_photo_0.png"
    ]
  },
  {
    slug: "unbox",
    title: "UNBOX – The Black Box Failure Hack",
    shortDescription: "A technical debugging competition challenging students to analyze, troubleshoot, and validate real-world software logic failures.",
    date: "13th August 2026 (11:00 AM – 3:00 PM)",
    category: "Professional Service",
    posterImage: "/events/unbox.png",
    fullContent: `The Rotaract Club of Rajalakshmi Institute of Technology successfully organized “UNBOX – The Black Box Failure Hack” on 13th August 2026 at C602, RIT. This event was organized as a technical debugging challenge with the purpose of developing practical problem-solving, analytical thinking, debugging, testing, and teamwork skills among students.

The event witnessed a total participation of 160 members. Participants competed in two-member teams and were assigned individual Black Boxes containing hidden bugs, broken logic, and unexpected system failures. Teams were required to analyse their assigned systems, identify the failure, understand its root cause, implement an appropriate fix, and validate the repaired system.

The challenge emphasized systematic debugging and encouraged participants to look beyond visible errors and understand the underlying reasons behind system failures. Participants were also required to document their working solution through a screen recording of the fixed Black Box. This added an additional layer of technical validation and required the teams to demonstrate that their repaired system was functioning correctly.

The event created a competitive and engaging technical environment where participants had to make decisions under time constraints while working collaboratively with their teammates. It concluded with the recognition of the Top Three Winners and distribution of prizes in the presence of HoD Dr. Nirmala Priya.

**Purpose for Conducting:**
* Provide students with practical exposure to debugging and software troubleshooting.
* Encourage systematic identification of software failures.
* Develop root-cause analysis and analytical thinking.
* Improve programming, testing, and validation skills.
* Strengthen teamwork, communication, and decision-making under time constraints.

**Key Highlights:**
* Engaged 160 registered participants working collaboratively in two-member teams.
* Challenged students to identify, debug, repair, and validate software failures in randomly assigned Black Boxes.
* Promoted systematic thinking and root-cause analysis rather than relying solely on trial and error.
* Distributed prizes to the Top Three Winners in the presence of HoD Dr. Nirmala Priya.

**Outcomes of the Event:**
* Improved practical debugging and troubleshooting abilities among participants.
* Enhanced logical, analytical problem-solving, and root-cause analysis skills.
* Improved teamwork and collaborative technical decision-making.
* Provided hands-on experience in testing and validating repaired systems under time constraints.`,
    galleryPhotos: [
      "/events/unbox/gallery/unbox_extracted_1.jpg",
      "/events/unbox/gallery/unbox_extracted_2.png",
      "/events/unbox/gallery/unbox_extracted_3.jpg",
      "/events/unbox/gallery/unbox_extracted_5.jpg",
      "/events/unbox/gallery/unbox_extracted_6.png"
    ]
  },
  {
    slug: "turf-tales",
    title: "TURF TALES – Cricket, Fellowship & Sportsmanship",
    shortDescription: "An energetic recreational box-cricket tournament fostering teamwork, healthy competition, and club bonding.",
    date: "23rd August 2026 (02:00 PM – 05:00 PM)",
    category: "Club Service",
    posterImage: "/events/Turf tales.png",
    fullContent: `The event "TURF TALES" was organized by the Rotaract Club of Rajalakshmi Institute of Technology on 23rd August 2026 at Next Level Sports Arena, Porur, bringing together members for an energetic and enjoyable sporting experience. The event focused on strengthening teamwork, sportsmanship, communication, coordination, and interpersonal bonding among Rotaractors.

The event began with the gathering and registration of participants, followed by a brief introduction and event briefing. The participants were divided into balanced teams and engaged in warm-up activities before kicking off the cricket tournament.

The matches created an energetic and friendly atmosphere, with participants actively communicating, coordinating with teammates, and cheering each other on throughout the games. While the competition was spirited, the primary focus remained on fellowship, interaction, and stepping away from academic routines.

The informal sporting environment allowed members to interact beyond formal club meetings, building genuine camaraderie. The event concluded with appreciation awards, group photographs, and celebratory interactions, leaving lasting memories for all participating Rotaractors.

**Purpose for Conducting:**
* Encourage teamwork and coordination through team-based cricket.
* Promote sportsmanship and healthy recreational participation.
* Improve communication and interaction among members.
* Strengthen camaraderie and fellowship within the club.
* Provide members with a refreshing break from academic routines.
* Foster a strong sense of belonging and unity among Rotaractors.

**Key Highlights & Outcomes:**
* 16 Rotaractors actively participated in competitive yet friendly cricket matches.
* Conducted engaging matches promoting agile physical activity and strategic game planning.
* Strengthened teamwork, communication, coordination, and sportsmanship.
* Created positive, lasting memories that reinforced club fellowship and unity.`,
    galleryPhotos: [
      "/events/turf-tales/gallery/turf_tales_photo_0.png",
      "/events/turf-tales/gallery/turf_tales_photo_1.png",
      "/events/turf-tales/gallery/turf_tales_photo_2.png",
      "/events/turf-tales/gallery/turf_tales_photo_3.png"
    ]
  },
  {
    slug: "varadha-kalai",
    title: "VARADHA KALAI VANDHA VIBE'U",
    shortDescription: "An engaging online club service initiative bringing Rotaractors together through sketch art, guessing games, and fellowship.",
    date: "29th August 2026 (07:00 PM – 09:00 PM)",
    category: "Club Service",
    posterImage: "/events/Varadha kalai.png",
    fullContent: `The Rotaract Club of Rajalakshmi Institute of Technology successfully organized “Varadha Kalai Vandha Vibe'u” on 29th August 2026 from 7:00 PM to 9:00 PM as an online Club Service initiative, witnessing the enthusiastic participation of 16 Rotaractors.

The event transformed a simple online gaming platform into an engaging space for creativity, quick thinking, and fellowship. Participants took turns drawing assigned words while their fellow Rotaractors raced to identify the words based on the sketches. Responses were submitted in real-time through the group chat, creating a fast-paced and laughter-filled dynamic.

What made the event uniquely fun was the unpredictability of the sketches and the humorous guesses that followed. Simple doodles led to wild speculations, friendly banter, and shared laughter, establishing an environment that was both delightfully competitive and warm.

The gathering offered members a comfortable avenue to interact beyond official project commitments. After 3 action-packed rounds, the event concluded with wide smiles, reinforcing club spirit and remote fellowship.

**Purpose for Conducting:**
* Strengthen the bond and camaraderie among club members through informal recreation.
* Provide a refreshing creative break away from daily academic routines.
* Encourage quick thinking, visual communication, and spontaneous expression.
* Foster active remote participation and inclusive interaction among Rotaractors.

**Key Highlights & Outcomes:**
* Engaged 16 members in 3 interactive rounds of sketch and guess challenges.
* Stimulated creative thinking and visual observation under timed rounds.
* Elevated member engagement and established deeper friendships through shared laughter.`,
    galleryPhotos: [
      "/events/varadha-kalai/gallery/varadha_photo_0.png",
      "/events/varadha-kalai/gallery/varadha_photo_1.png",
      "/events/varadha-kalai/gallery/varadha_photo_2.jpeg"
    ]
  },
  {
    slug: "burger-sapda-polama",
    title: "BURGER SAPDA POLAMAAA?",
    shortDescription: "A joyful fellowship afternoon at VR Chennai with burgers, fun group games, candid conversations, and friendship bonding.",
    date: "6th September 2026 (01:00 PM – 03:00 PM)",
    category: "Club Service",
    posterImage: "/events/burger-sapda-polama.png",
    fullContent: `“Burger Sapda Polamaaa?”, organized by the Rotaract Club of Rajalakshmi Institute of Technology, was conducted on 6th September 2026 at VR Chennai from 1:00 PM to 3:00 PM as a casual and engaging fellowship initiative. The event brought 15 Rotaractors together for an afternoon filled with good food, fun activities, conversations, laughter, and memorable moments.

The outing offered members a refreshing break from their usual academic schedules and club responsibilities. Meeting in a lively and comfortable mall atmosphere, members enjoyed delicious meals while participating in lighthearted group games and friendly banter.

More than just a casual outing, “Burger Sapda Polamaaa?” created a relaxed space for Rotaractors to pause, unwind, and enjoy each other’s company. It proved that good food shared with genuine friends strengthens the bonds that make our Rotaract family united.

The afternoon concluded with warm interactions, group selfies, and lasting smiles, proving that informal fellowship is at the heart of our club's vitality and team spirit.

**Purpose for Conducting:**
* Strengthen friendship, camaraderie, and interpersonal bonding among Rotaractors.
* Encourage informal interaction, meaningful conversations, and mutual trust.
* Provide a refreshing mental and social break from demanding academic routines.
* Foster friendly competition and joyful team memories through shared food and games.
* Strengthen the Rotaract family by building lasting friendships beyond project duties.

**Key Highlights & Outcomes:**
* 15 members actively participated in an engaging fellowship gathering at VR Chennai.
* Enjoyed burgers and interactive games fostering laughter and togetherness.
* Rejuvenated energy and reinforced an inclusive, supportive club culture.`,
    galleryPhotos: [
      "/events/burger-sapda-polama/gallery/burger_photo_0.jpeg",
      "/events/burger-sapda-polama/gallery/burger_photo_1.jpeg"
    ]
  },
  {
    slug: "vaazhvin-kural",
    title: "வாழ்வின் குரல் – Suicide Prevention & Mental Well-Being",
    shortDescription: "A grassroots community outreach and awareness initiative at Anna Nagar Tower Park focusing on suicide prevention and active listening.",
    date: "10th September 2026 (04:30 PM – 06:00 PM)",
    category: "Club Service",
    posterImage: "/events/Vazhvin kural.png",
    fullContent: `The Rotaract Club of Rajalakshmi Institute of Technology conducted “வாழ்வின் குரல்” on 10th September 2026 at Anna Nagar Tower Park as a community-based awareness initiative focusing on suicide prevention, emotional well-being, and compassionate listening.

The initiative engaged youngsters, families, and morning/evening walkers through meaningful one-on-one conversations and thought-provoking questions regarding mental health, coping with distress, and destigmatizing emotional support. Rather than conventional pamphlet distribution, the team prioritized genuine human connection and listening.

By creating a safe, non-judgmental space in a public setting, Rotaractors encouraged members of the public to reflect on mental health challenges and emphasize the life-saving importance of listening, understanding, and timely intervention.

Aligned with UN Sustainable Development Goals (SDG 3: Good Health and Well-Being, SDG 4: Quality Education, and SDG 10: Reduced Inequalities), the initiative reached over 2,000+ people through physical interactions and digital dissemination.

**Purpose for Conducting:**
* Create public awareness about suicide prevention and emotional distress management.
* Encourage open dialogues about mental health without fear of judgment.
* Highlight the vital importance of seeking timely emotional support.
* Promote empathy, active listening, and collective community care.

**Key Highlights & Outcomes:**
* Engaged youngsters and parents in open dialogues on emotional well-being.
* Reached 2000+ people and conducted in-depth interviews with members of the public.
* Sensitized citizens to the warning signs of distress and shared helpline resources.
* Concluded with the core message: “Let a voice be heard. Let a life be saved.”`,
    galleryPhotos: [
      "/events/vaazhvin-kural/gallery/vaazhvin_photo_0.jpeg",
      "/events/vaazhvin-kural/gallery/vaazhvin_photo_1.png"
    ]
  },
  {
    slug: "career-catalyst",
    title: "CAREER CATALYST – Your Roadmap to Professional Growth",
    shortDescription: "A joint professional development webinar offering practical insights on career planning, campus placements, and skill building.",
    date: "12th September 2026 (07:00 PM onwards)",
    category: "Professional Service",
    posterImage: "/events/Career catalyst.png",
    fullContent: `The “Career Catalyst” programme was jointly organized by the Rotaract Club of Rajalakshmi Institute of Technology and the Rotaract Club of AIHSHEW to equip students with practical, actionable guidance for their upcoming professional journeys.

Conducted virtually via Google Meet with over 40+ enthusiastic participants, the session featured distinguished guest speaker Rtr. IPP. Kumaresan Krishna. The program moved away from formal slide lectures and instead drew upon authentic stories and learnings from the speaker’s own corporate and placement journey.

Through these real-world anecdotes, participants gained clear perspectives on placement expectations, industry culture, resume preparation, and how to navigate career crossroads. The speaker encouraged attendees to introspect on their individual strengths and set realistic milestones with disciplined preparation.

The session closed with an interactive Q&A session where students asked questions regarding job preparation, interviews, and career pivots, leaving everyone inspired and better prepared for the road ahead.

**Purpose for Conducting:**
* Provide practical career guidance and clarity on professional pathways.
* Demystify campus placements and interview readiness through authentic experiences.
* Equip students with actionable strategies for continuous skill improvement and growth.
* Motivate students to take proactive ownership of their careers with confidence.

**Key Highlights & Outcomes:**
* Joint collaborative initiative between RAC RIT and RAC AIHSHEW.
* 40+ students actively participated in live career discussions with Rtr. IPP. Kumaresan Krishna.
* Boosted confidence and placement awareness among pre-final and final-year students.
* Fostered strong inter-club collaboration and knowledge sharing.`,
    galleryPhotos: [
      "/events/career-catalyst/gallery/career_catalyst_photo_0.png",
      "/events/career-catalyst/gallery/career_catalyst_photo_1.png",
      "/events/career-catalyst/gallery/career_catalyst_photo_2.png",
      "/events/career-catalyst/gallery/career_catalyst_photo_3.png"
    ]
  },
  {
    slug: "kandupudi-da-kaipulla",
    title: "KANDUPUDI DA KAILPULLAI! – Tower Park Treasure Hunt",
    shortDescription: "An adventurous outdoor treasure hunt testing observation, riddle decoding, rapid team collaboration, and tactical problem-solving.",
    date: "20th September 2026 (04:00 PM – 06:00 PM)",
    category: "Club Service",
    posterImage: "/events/Kandupudi.png",
    fullContent: `The Rotaract Club of Rajalakshmi Institute of Technology successfully organized “Kandupudi Da Kailpullai!” on 20th September 2026 at Anna Nagar Tower Park as an outdoor Club Service treasure hunting challenge.

Designed to immerse participants in mystery and adventure, teams had to unravel cryptic clues, complete physical challenges, and piece together riddles scattered across the park's scenic zones. Every station tested observation, logic, and rapid coordination under the ticking clock.

The outdoor setting provided a refreshing change of pace from indoor routines, prompting participants to run, brainstorm, and work in synchrony with their teammates. The lighthearted theme, inspired by popular culture, sparked continuous laughter and healthy competitive excitement.

The event reached its thrilling climax as teams sprinted to uncover the final hidden clue. Beyond finding the treasure, the hunt forged deep fellowship, trust, and teamwork among the 20 participating Rotaractors.

**Purpose for Conducting:**
* Cultivate teamwork, collective decision-making, and trust under time constraints.
* Sharpen logical deduction, clue interpretation, and spatial observation skills.
* Provide an engaging and adventurous outdoor recreational experience.
* Strengthen fellowship and bonds among club members across various avenues.

**Key Highlights & Outcomes:**
* 20 active Rotaractor participants organized into competing search squads.
* Dynamic outdoor clue stations traversing Anna Nagar Tower Park.
* Tested problem-solving, communication, and agility through collaborative gameplay.
* Concluded with prize distribution and team reflections on collective accomplishment.`,
    galleryPhotos: [
      "/events/kandupudi/gallery/kandupudi_photo_0.png",
      "/events/kandupudi/gallery/kandupudi_photo_1.png",
      "/events/kandupudi/gallery/kandupudi_photo_2.jpeg",
      "/events/kandupudi/gallery/kandupudi_photo_3.jpeg"
    ]
  },
  {
    slug: "hail-13th-installation",
    title: "HAIL – The 13th Installation Ceremony",
    shortDescription: "The official induction ceremony celebrating leadership transitions, honoring outgoing contributions, and unveiling the 2026–2027 vision.",
    date: "16th October 2026 (10:00 AM – 12:00 PM)",
    category: "Professional Service",
    posterImage: "/events/HAIL.png",
    fullContent: `The Rotaract Club of Rajalakshmi Institute of Technology celebrated its 13th Installation Ceremony, titled “HAIL,” on 16th October 2026 at Blue Dot Academy from 10:00 AM to 12:00 PM. The milestone ceremony marked the formal induction of the new leadership board for the Rotary year 2026–2027.

The auspicious ceremony was graced by Chief Guest Rtr. PP. PHF. Harivignesh M, District Rotaract Representative (RID 3233), along with distinguished Rotary and Rotaract dignitaries, faculty advisors, and members.

The event celebrated the outgoing team's remarkable achievements under IPP Rtr. Aswin Pramoth A R, followed by the formal collaring of incoming President Rtr. Hari Balaji R and the induction of Secretary Rtr. Rupesh S along with their dynamic board of directors and avenue chairs.

In his maiden address, President Rtr. Hari Balaji unveiled the theme and vision for the year, reiterating the club's steadfast dedication to impactful community service, professional growth, youth empowerment, and enduring fellowship.

**Purpose for Conducting:**
* Formally install the President, Secretary, and Board of Directors for 2026–2027.
* Acknowledge and honor the dedicated service of outgoing leaders and members.
* Present the club's annual roadmap, flagship projects, and service objectives.
* Strengthen institutional ties with Rotary Club of Chennai Gateway and District 3233 leadership.

**Key Highlights & Outcomes:**
* Prestigious induction ceremony attended by District Rotaract Representative Rtr. PP. PHF. Harivignesh M.
* Successful collaring of President Rtr. Hari Balaji R and swearing-in of the 13th Board.
* Released the theme, annual goals, and club agenda for the Rotary year 2026–2027.
* Reinvigorated the spirit of fellowship and service among all attending Rotaractors.`,
    galleryPhotos: [
      "/events/hail/gallery/hail_photo_0.png",
      "/events/hail/gallery/hail_photo_1.png",
      "/events/hail/gallery/hail_photo_2.png",
      "/events/hail/gallery/hail_photo_3.png",
      "/events/hail/gallery/hail_photo_4.png",
      "/events/hail/gallery/hail_photo_5.png"
    ]
  }
];

async function main() {
  console.log('Seeding events database with all 10 events...');
  
  await prisma.event.deleteMany();

  for (const e of events) {
    await prisma.event.create({
      data: e
    });
  }

  console.log(`Events seeding finished successfully (${events.length} events seeded).`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
