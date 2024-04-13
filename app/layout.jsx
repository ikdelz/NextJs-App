import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs App - Elise",
  description: "An app created with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
