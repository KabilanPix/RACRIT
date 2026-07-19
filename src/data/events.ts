export interface EventData {
  slug: string;
  title: string;
  shortDescription: string;
  date: string;
  category: string;
  posterImage: string;
  fullContent: string;
}

export const events: EventData[] = [
  {
    slug: "imposter",
    title: "Imposter",
    shortDescription: "CLUB SERVICE EVENT",
    date: "COMING SOON",
    category: "Club Service",
    posterImage: "/events/imposter.png",
    fullContent: "Join us for an exciting club service event called Imposter! More details to follow.",
  },
  {
    slug: "anbuden-samayal-manamudan-valangal-2",
    title: "ASMV 2.0",
    shortDescription: "COMMUNITY SERVICE",
    date: "COMING SOON",
    category: "Community Service",
    posterImage: "/events/asmv.png",
    fullContent: "Anbuden Samayal Manamudan Valangal 2.0 is a community service initiative focused on giving back. Stay tuned for dates and venue.",
  }
];
