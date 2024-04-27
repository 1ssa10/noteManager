import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NotesProvider } from "@/components/NotesContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" container flex flex-col md:max-w-6xl h-screen mx-auto overflow-hidden ">
          <Navbar />
          <NotesProvider>{children}</NotesProvider>
        </div>
      </body>
    </html>
  );
}
