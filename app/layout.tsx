import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import FloatingDonButton from "../components/FloatingDonButton"; 
import Footer from "../components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adorons Jésus",
  description: "Site officiel de l'association Adorons Jésus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        
        {/* MODIFICATION : Suppression de pt-20 pour que l'accueil colle parfaitement au menu */}
        <main className="bg-[#FFFDF5] min-h-screen">
          {children}
        </main>

        <Footer /> 
        
        <FloatingDonButton />
      </body>
    </html>
  );
}