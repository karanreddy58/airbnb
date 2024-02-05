import type { Metadata } from "next";
import "./globals.css";
import  {Nunito} from "next/font/google"
import Navbar from "./components/navbar/navbar";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Rent a house for funzies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
