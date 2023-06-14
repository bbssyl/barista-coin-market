import NavbarComponent from "@/components/NavbarComponent";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barista Coin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-indigo-950")}>{children}</body>
    </html>
  );
}
