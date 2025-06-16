import HeaderArea from "@components/HeaderArea";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WithChildren } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dan Govan - Senior Frontend Developer | Typescript / React | London ",
  description:
    "CV site built with React, Next 15, Tailwind CSS, and TypeScript. It showcases my skills, experience, and projects as a Senior Front-End Developer.",
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="subpixel-antialiased max-w-(--breakpoint-xl) text-2xl mx-auto font-serif px-4 print:px-0">
          <HeaderArea
            header="Dan Govan"
            intro="Senior Front-End Developer with 20 years experience creating intuitive, user-focused interfaces, and guiding teams toward modern solutions."
          />
          <div role="main">{children}</div>
        </div>
      </body>
    </html>
  );
}
