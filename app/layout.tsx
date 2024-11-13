import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const travels = localFont({
  src: "./fonts/TTTravelsNextTrialBlack/TTTravelsNextTrialRegular.ttf",
  display: "swap",
});

const myFonts = localFont({
  src: [
    {
      path: "./fonts/TTTravelsNextTrialBlack/TTTravelsNextTrialRegular.ttf",
    },
    {
      path: "./fonts/segoe-ui/Segoe_UI.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schole Labs",
  description: "Schole SMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* className={`${inter.variable} ${roboto_mono.variable}`} */}
      <body className={myFonts.className}>{children}</body>
    </html>
  );
}
