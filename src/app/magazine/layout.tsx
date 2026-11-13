import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magazine | RACRIT - Rotaract Club of RIT",
  description: "Browse the official monthly magazine editions of RIT Beyond the Pages - reflections, initiatives, and leadership stories.",
};

export default function MagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
