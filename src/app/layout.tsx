import type { Metadata } from "next";
import { Roboto, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import Providers from "./providers";
import { Header } from "@/features/layout/header";
import { Footer } from "@/features/layout/footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
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
    <html lang="en" className={`${roboto.className} ${cormorant.variable}`}>
      <body>
        <Header />
        <Providers>
          <main className="main-content">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
