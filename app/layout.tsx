import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Munigonda Kiran — Full Stack Engineer & Applied AI Systems",
  description:
    "Munigonda Kiran's Portfolio. Full Stack Engineer specializing in modern web & mobile architectures (React, Python, Node.js, PostgreSQL), autonomous multi-agent systems, and cloud orchestration (AWS, Docker, K8s).",
  keywords: [
    "Munigonda Kiran",
    "Full Stack Engineer",
    "Python",
    "React",
    "AWS",
    "Docker",
    "PostgreSQL",
    "Kubernetes",
    "Applied AI",
    "Next.js",
  ],
  authors: [{ name: "Munigonda Kiran" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Munigonda Kiran — Full Stack Engineer & Applied AI Systems",
    description: "Full Stack Engineer specializing in modern web & mobile architectures, autonomous AI agents, and cloud infrastructure.",
    siteName: "Munigonda Kiran Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="bg-black text-white font-sans antialiased selection:bg-coral selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
