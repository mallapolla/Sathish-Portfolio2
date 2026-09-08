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

const siteUrl = "https://sathishportfolio2.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sathish Mallapolla | Software Engineer | Python | AI/ML | RAG | Full Stack",
  description:
    "Sathish Mallapolla — Software Engineer specializing in Python backend systems, AI/ML, RAG pipelines, Agentic AI workflows, and scalable full-stack products. Based in Hyderabad, India.",
  authors: [{ name: "Sathish Mallapolla" }],
  keywords: [
    "Sathish Mallapolla",
    "Software Engineer",
    "Python Backend",
    "AI Developer",
    "ML Engineer",
    "RAG",
    "Agentic AI",
    "LLM",
    "Full Stack Developer",
    "Django",
    "FastAPI",
    "React",
    "REST API",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Hyderabad",
    "India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sathish Mallapolla | Software Engineer | Python | AI/ML | RAG | Full Stack",
    description:
      "Software Engineer specializing in Python backend, AI/ML, RAG pipelines, Agentic AI, and scalable full-stack products. Real projects, real metrics, production deployed.",
    siteName: "Sathish Mallapolla",
    images: [
      {
        url: "/images/profile-original.jpg",
        width: 800,
        height: 800,
        alt: "Sathish Mallapolla — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish Mallapolla | Software Engineer | Python | AI/ML | RAG | Full Stack",
    description:
      "Software Engineer specializing in Python backend, AI/ML, RAG pipelines, Agentic AI, and scalable full-stack products.",
    images: ["/images/profile-original.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sathish Mallapolla",
  url: siteUrl,
  jobTitle: "Software Engineer",
  description:
    "Software Engineer specializing in Python backend systems, AI/ML, RAG pipelines, Agentic AI, and full-stack products.",
  email: "sathishmallapolla125@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/mallapolla",
    "https://www.linkedin.com/in/sathish-mallapolla-6ab0182b6",
  ],
  knowsAbout: [
    "Python",
    "Django",
    "FastAPI",
    "Machine Learning",
    "RAG",
    "Agentic AI",
    "LLM",
    "React",
    "REST APIs",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
