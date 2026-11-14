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
  title: "Munigonda Kiran — Full-stack engineer building AI systems",
  description:
    "Full-stack engineer moving into AI engineering. I build multi-agent and RAG products end to end, from Postgres to the prompt. Currently building Arcwell.",
  keywords: [
    "Munigonda Kiran",
    "Full Stack Engineer",
    "Python",
    "React",
    "AWS",
    "Docker",
    "PostgreSQL",
    "LangChain",
    "AI engineering",
    "Next.js",
  ],
  authors: [{ name: "Munigonda Kiran" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Munigonda Kiran — Full-stack engineer building AI systems",
    description: "Full-stack engineer moving into AI engineering. I build multi-agent and RAG products end to end.",
    siteName: "Munigonda Kiran",
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
