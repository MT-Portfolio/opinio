import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Opinio: Make Impact, Get Rewards",
  description:
    "Share your opinions, influence brands, and earn rewards with Opinio's paid surveys. Sign up now to start making an impact!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        // className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
