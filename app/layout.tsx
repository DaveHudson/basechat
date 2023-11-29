import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "./components/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basechat",
  description: "Base for trying out AI chat app ideas with React",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <App>{children}</App>
      </body>
    </html>
  );
}