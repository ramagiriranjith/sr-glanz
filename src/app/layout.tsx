import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Technolance - IT Staffing & Implementation Services",
  description: "Empowering IT Teams. Enabling Seamless Implementation. We provide specialized staffing solutions and comprehensive implementation support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${inter.variable} ${playfair.variable} antialiased bg-[#fff7ed]`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
