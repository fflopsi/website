import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./var.css";
import "./globals.css";
import "./navBar.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florian Frauenfelder",
  description: "Florian's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
