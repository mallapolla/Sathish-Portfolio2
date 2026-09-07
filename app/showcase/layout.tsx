import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sathish Mallapolla — Portfolio Showcase",
  description:
    "Cinematic laptop showcase of Sathish Mallapolla's portfolio — Software Engineer, AI Developer, Full Stack Developer.",
  robots: { index: false, follow: false },
};

export default function ShowcaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
