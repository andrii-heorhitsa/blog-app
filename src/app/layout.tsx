import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/features/layout/header";
import { Footer } from "@/features/layout/footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blog App",
  description: "Test Blog App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
