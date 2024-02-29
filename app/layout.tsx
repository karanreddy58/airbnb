import type { Metadata } from "next";
import "./globals.css";
import  {Nunito} from "next/font/google"
import Navbar from "./components/navbar/navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

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
        <ToasterProvider/>
        <RegisterModal/>
        <Navbar />
        {children}</body>
    </html>
  );
}
