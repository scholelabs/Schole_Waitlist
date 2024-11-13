import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const segoe = localFont({
  src: "../public/fonts/segoe-ui/Segoe_UI.ttf",
  variable: "--font-segoe",
});

const ttTravels = localFont({
  src: "../public/fonts/TTTravelsNextTrialBlack/TTTravelsNextTrialRegular.ttf",
  variable: "--font-tttravels",
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
      <body className={`${segoe.variable} ${ttTravels.variable}`}>
        {children}
      </body>
    </html>
  );
}
