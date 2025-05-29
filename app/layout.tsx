import HeaderArea from "@components/HeaderArea";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dan Govan - Senior Frontend Developer | Typescript / React | London ",
  description: "CV site built with React, Next 13, Tailwind, Cypress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="subpixel-antialiased max-w-screen-xl text-2xl mx-auto font-serif px-4 print:px-0">
          <HeaderArea
            header="Dan Govan"
            intro="Senior Front-End / JavaScript Developer with 20 years of experience crafting intuitive, user-focused interfaces and guiding teams toward scalable, modern front-end solutions."
          />
          <div role="main">{children}</div>
        </div>
      </body>
    </html>
  );
}
