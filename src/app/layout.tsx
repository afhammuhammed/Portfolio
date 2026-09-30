import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afham Muhammed Ashraf · AI Strategist & Published Author",
  description:
    "Portfolio of Afham Muhammed Ashraf – BBA in AI & Digital Marketing at Lovely Professional University, published crime-thriller author, and digital growth strategist.",
  keywords: [
    "Afham Muhammed Ashraf",
    "Portfolio",
    "AI and Digital Marketing",
    "Lovely Professional University",
    "Published Author",
    "It's Just a Character",
    "Digital Strategist",
    "Model United Nations",
    "SDG Ambassador",
  ],
  authors: [{ name: "Afham Muhammed Ashraf" }],
  openGraph: {
    title: "Afham Muhammed Ashraf · Portfolio",
    description:
      "Bridging the gap between artificial intelligence, business strategy, and human storytelling.",
    url: "https://afham.dev",
    siteName: "Afham Muhammed Ashraf Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.className} scroll-smooth antialiased`}
    >
      <head />
      <body className={`${poppins.className} min-h-screen bg-[#fafafa] text-[#09090b] font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900`}>
        {children}
      </body>
    </html>
  );
}

