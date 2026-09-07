import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://sathishmallapolla.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sathish Mallapolla — Software Engineer | AI | Full Stack Developer",
  description:
    "Sathish Mallapolla — Software Engineer focused on AI, full-stack development, scalable applications, and intelligent digital products.",
  authors: [{ name: "Sathish Mallapolla" }],
  keywords: [
    "Sathish Mallapolla",
    "Software Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Python",
    "Django",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sathish Mallapolla — Software Engineer | AI | Full Stack Developer",
    description:
      "Sathish Mallapolla — Software Engineer focused on AI, full-stack development, scalable applications, and intelligent digital products.",
    siteName: "Sathish Mallapolla",
    images: [
      {
        url: "/images/profile-original.jpg",
        width: 800,
        height: 800,
        alt: "Sathish Mallapolla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish Mallapolla — Software Engineer | AI | Full Stack Developer",
    description:
      "Sathish Mallapolla — Software Engineer focused on AI, full-stack development, scalable applications, and intelligent digital products.",
    images: ["/images/profile-original.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
