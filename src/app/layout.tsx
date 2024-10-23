import type { Metadata } from "next";
import "@/styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "James Dong",
  description: "James Dong's personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
