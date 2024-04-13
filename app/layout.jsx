import { Quicksand } from "next/font/google";
import "./globals.css";

// components
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs App - Elise",
  description: "An app created with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
