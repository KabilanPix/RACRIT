export interface MagazineIssue {
  id: string;
  issueNumber: string;
  month: string;
  year: string;
  monthIndex: number; // 7 for July, 8 for August, 9 for September, 10 for October
  title: string;
  series: string;
  subtitle: string;
  tagline: string;
  coverImage: string;
  readUrl: string; // The user will provide redirecting links for each edition
  themeColor: {
    accent: string;
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
    gradient: string;
  };
  description: string;
  highlights: string[];
}

export const magazines: MagazineIssue[] = [
  {
    id: "july-edition",
    issueNumber: "Issue 01",
    month: "July",
    year: "2024",
    monthIndex: 7,
    title: "July Edition",
    series: "RIT Beyond the Pages",
    subtitle: "Reflections That Inspire, Projects That Matter",
    tagline: "Beyond the tasks. Beyond the titles. Beyond ourselves.",
    coverImage: "/magazines/july-edition.png",
    readUrl: "https://heyzine.com/flip-book/5847bba6e0.html",
    themeColor: {
      accent: "#ef4444",
      border: "border-red-500/30",
      glow: "hover:shadow-[0_0_35px_rgba(239,68,68,0.35)]",
      badgeBg: "bg-red-500/10",
      badgeText: "text-red-400",
      gradient: "from-red-500/20 via-transparent to-transparent"
    },
    description: "The inaugural release featuring foundational reflections, landmark community service initiatives, and the bold lion spirit of RAC RIT.",
    highlights: ["Inaugural Launch", "Community Initiatives", "Lion Heritage"]
  },
  {
    id: "august-edition",
    issueNumber: "Issue 02",
    month: "August",
    year: "2024",
    monthIndex: 8,
    title: "August Edition",
    series: "RIT Beyond the Pages",
    subtitle: "Reflections That Inspire, Projects That Matter",
    tagline: "Beyond the tasks. Beyond the titles. Beyond ourselves.",
    coverImage: "/magazines/august-edition.png",
    readUrl: "https://heyzine.com/flip-book/10966f155c.html",
    themeColor: {
      accent: "#eab308",
      border: "border-amber-500/30",
      glow: "hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-400",
      gradient: "from-amber-500/20 via-transparent to-transparent"
    },
    description: "Standing resolute like a fortress tower under golden skies, showcasing visionary leadership and purposeful youth action.",
    highlights: ["Leadership Summit", "Fortress of Service", "Youth Action"]
  },
  {
    id: "september-edition",
    issueNumber: "Issue 03",
    month: "September",
    year: "2024",
    monthIndex: 9,
    title: "September Edition",
    series: "RIT Beyond the Pages",
    subtitle: "Reflections That Inspire, Projects That Matter",
    tagline: "A king, a protector, a vision beyond borders, strength in purpose, power in people.",
    coverImage: "/magazines/september-edition.png",
    readUrl: "https://heyzine.com/flip-book/ce9fe96d9e.html",
    themeColor: {
      accent: "#a855f7",
      border: "border-purple-500/30",
      glow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]",
      badgeBg: "bg-purple-500/10",
      badgeText: "text-purple-400",
      gradient: "from-purple-500/20 via-transparent to-transparent"
    },
    description: "Inspired by the Black Panther legacy — celebrating courage, innovative technology, and transformative community upliftment.",
    highlights: ["Wakanda Tribute", "Strength in Purpose", "Power in People"]
  },
  {
    id: "october-edition",
    issueNumber: "Issue 04",
    month: "October",
    year: "2024",
    monthIndex: 10,
    title: "October Edition",
    series: "RIT Beyond the Pages",
    subtitle: "Reflections That Inspire, Projects That Matter",
    tagline: "Beyond the tasks. Beyond the titles. Beyond ourselves.",
    coverImage: "/magazines/october-edition.png",
    readUrl: "https://heyzine.com/flip-book/8518816e57.html",
    themeColor: {
      accent: "#ec4899",
      border: "border-pink-500/30",
      glow: "hover:shadow-[0_0_35px_rgba(236,72,153,0.35)]",
      badgeBg: "bg-pink-500/10",
      badgeText: "text-pink-400",
      gradient: "from-pink-500/20 via-transparent to-transparent"
    },
    description: "A Halloween Gothic mystery edition capturing nighttime drives, collaborative teamwork, and hauntingly good achievements.",
    highlights: ["Halloween Special", "Gothic Aesthetics", "Team Milestones"]
  }
];
